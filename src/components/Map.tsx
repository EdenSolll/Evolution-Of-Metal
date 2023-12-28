import { useEffect, useRef } from 'react';
import L, { ImageOverlay, Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Genres from '../data/genres.tsx';

interface Genre {
 y_axis: number;
 year: number;
 genre: string;
}

const MAP_WIDTH = 540;
const MAP_HEIGHT = 540;

function drawLine(map: Map, coordinates: L.LatLngTuple[], options: any) {
 return L.polyline(coordinates, options).addTo(map);
}

export default function MapComponent(): JSX.Element {
 const imageOverlay = useRef<ImageOverlay | null>(null);
 const mapContainer = useRef<Map | null>(null);
const segmentsByLine: Record<number, Array<any>> = {};

 useEffect(() => {
  if (mapContainer.current) {
    return;
  }

  try {
    const map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 3,
      zoomSnap: 0.1,
      zoomDelta: 0.1,
      attributionControl: false,
    }).setView([200, -75], 0);

    const imageUrl = 'https://www.metal-archives.com/images/6/6/6/6/666668.jpg?0304';
    const bounds: L.LatLngTuple[] = [[0, 0], [MAP_HEIGHT, MAP_WIDTH]];

    if (imageOverlay.current) {
      map.removeLayer(imageOverlay.current);
    }

    imageOverlay.current = L.imageOverlay(imageUrl, bounds).addTo(map);

    Genres.forEach((genre: Genre, index: number) => {
      const polylineCoordinates: L.LatLngTuple[] = [
        [genre.y_axis, MAP_WIDTH],
        [genre.y_axis, ((genre.year - 1970) * 10)],
      ];

  drawLine(map, polylineCoordinates, { color: 'maroon' });
  const dottedLine = drawLine(map, polylineCoordinates, {
   color: 'red',
   dashArray: '75,5'
  });


dottedLine.on('click', function(e) {
 alert(`Segment of dotted line ${index + 1} clicked!`);
});


   dottedLine.bindTooltip(genre.genre, {
   permanent: true,
   sticky: false,
   offset: [0, -10], // Offset the tooltip above the line
  }).addTo(map);
    });

    const yearLayers: Record<number, L.Marker> = {};
    for (let year = 1970; year <= 2024; year++) {
      const yearMarker = L.marker([0, ((year - 1970) * 10)], {
        icon: L.divIcon({
          className: 'leaflet-marker-icon',
          html: `<div class="year">${year}</div>`,
          iconSize: [200, 40],
          iconAnchor: [15, 0],
        })
      }).addTo(map);

      yearLayers[year] = yearMarker;
    }

    map.on('zoomend', () => {
      const zoom = map.getZoom();
      console.log('Zoom level:', zoom);

      for (let yearStr in yearLayers) {
        const year = parseInt(yearStr);
        if (zoom >= 2) {
          console.log('Adding year marker for year:', year);
          yearLayers[year].addTo(map);
          yearLayers[year].openTooltip();
        } else {
          if (year % 10 !== 0) {
            console.log('Removing year marker for year:', year);
            yearLayers[year].removeFrom(map);
          }
        }
      }
    });

    map.fire('zoomend');
    mapContainer.current = map;
  } catch (error) {
    console.error("Failed to initialize map: ", error);
  }
 }, []);
 return (
   <div
     id="map"
     style={{
       position: 'absolute',
     top: 0,
     left: 0,
     height: 'calc(100vh - 60px)',
     width: '100%'
   }}
 ></div>
 );
}
