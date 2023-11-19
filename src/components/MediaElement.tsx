import React, { Component, ReactElement } from 'react';
import hlsjs from 'hls.js';
import 'mediaelement';
import 'mediaelement/build/mediaelementplayer.min.css';

interface Source {
  src: string;
  type: string;
}

interface Track {
  src: string;
  kind: string;
  lang: string;
  label?: string;
}

interface MediaElementProps {
  id: string;
  width: string;
  height: string;
  poster?: string;
  controls?: boolean;
  preload?: string;
  mediaType: 'video' | 'audio';
  sources: string;
  tracks: string;
  options: string;
}

interface MediaElementState {
  player: any; // You may need to replace 'any' with the actual type of MediaElementPlayer
}

export default class MediaElement extends Component<MediaElementProps, MediaElementState> {
  state: MediaElementState = {
    player: null,
  };

  success(media: any, node: any, instance: any): void {
    // Your action when media was successfully loaded
  }

  error(media: any): void {
    // Your action when media had an error loading
  }

  componentDidMount(): void {
    const { MediaElementPlayer } = (window as any).global;

    if (!MediaElementPlayer) {
      return;
    }

    const options = Object.assign({}, JSON.parse(this.props.options), {
      success: (media: any, node: any, instance: any) => this.success(media, node, instance),
      error: (media: any, node: any) => this.error(media, node),
    });

    (window as any).Hls = hlsjs;
    this.setState({ player: new MediaElementPlayer(this.props.id, options) });
  }

  componentWillUnmount(): void {
    if (this.state.player) {
      this.state.player.remove();
      this.setState({ player: null });
    }
  }

  render(): ReactElement {
    const props = this.props;
    const sources: Source[] = JSON.parse(props.sources);
    const tracks: Track[] = JSON.parse(props.tracks);
    const sourceTags: string[] = [];
    const tracksTags: string[] = [];

    for (let i = 0, total = sources.length; i < total; i++) {
      const source = sources[i];
      sourceTags.push(`<source src="${source.src}" type="${source.type}">`);
    }

    for (let i = 0, total = tracks.length; i < total; i++) {
      const track = tracks[i];
      tracksTags.push(
        `<track src="${track.src}" kind="${track.kind}" srclang="${track.lang}"${track.label ? ` label=${track.label}` : ''}>`
      );
    }

    const mediaBody = `${sourceTags.join('\n')}${tracksTags.join('\n')}`;
    const mediaHtml =
      props.mediaType === 'video' ? (
        `<video id="${props.id}" width="${props.width}" height="${props.height}"${props.poster ? ` poster=${props.poster}` : ''}
					${props.controls ? ' controls' : ''}${props.preload ? ` preload="${props.preload}"` : ''}>
					${mediaBody}
				</video>`
      ) : (
        `<audio id="${props.id}" width="${props.width}" controls>
					${mediaBody}
				</audio>`
      );

    return <div dangerouslySetInnerHTML={{ __html: mediaHtml }} />;
  }
}
