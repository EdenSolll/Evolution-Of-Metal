import 'leaflet/dist/leaflet.css';
import React, { Component } from 'react';
import L from 'leaflet';
import Genres from '../data/genres.tsx';

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.mapContainerRef = React.createRef();
    this.map = null;
  }

  componentDidMount() {
    // Get the map container using the ref
    const mapContainer = this.mapContainerRef.current;

    // Create Leaflet map
    this.map = L.map(mapContainer, {
      crs: L.CRS.Simple,
      minZoom: -5,
    });

    // Set initial view
    this.map.setView([500, 500], 0);

    // Set map container size
    mapContainer.style.width = '100vw';
    mapContainer.style.height = 'calc(100vh - 5eu)';

    // Define image bounds and add image overlay
    const bounds = [[-20, -20], [1020, 1020]];
    const image = L.imageOverlay('../assets/1092392.jpg', bounds).addTo(this.map);

    // Generate and add polylines based on Genres array
    Genres.forEach((genre) => {
      const polylineCoordinates = [
        [genre.y_axis, 1020],
        [genre.y_axis, genre.year / 10],
      ];

      L.polyline(polylineCoordinates, { color: 'red' }).addTo(this.map);
    });
  }

  componentWillUnmount() {
    // Clean up and remove the map instance when the component is unmounted
    if (this.map) {
      this.map.remove();
    }
  }

  render() {
    return <div id="map-container" ref={this.mapContainerRef}></div>;
  }
}

export default LeafletMap;
