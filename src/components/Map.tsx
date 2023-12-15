import { useEffect, useRef } from 'react';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Genres from '../data/genres.tsx';

export default function Map() {
  const lineLayer = useRef<L.LayerGroup<any> | null>(null);
  const imageOverlay = useRef<L.ImageOverlay | null>(null);
  const mapContainer = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapContainer.current) {
      return;
    }

    const map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 3,
      zoomSnap: 0.1,
      zoomDelta: 0.1,
      attributionControl: false,
    }).setView([200, -75], 0);

    const imageUrl = 'https://www.metal-archives.com/images/6/6/6/6/666668.jpg?0304';
    const bounds = [[0, 0], [540, 540]] as L.LatLngBoundsExpression;

    if (imageOverlay.current) {
      map.removeLayer(imageOverlay.current);
    }
    imageOverlay.current = L.imageOverlay(imageUrl, bounds).addTo(map);

    lineLayer.current = L.layerGroup().addTo(map);

    const labelLayer = L.layerGroup().addTo(map);

    Genres.forEach((genre) => {
      const polylineCoordinates: LatLngTuple[] = [
        [genre.y_axis, 540],
        [genre.y_axis, ((genre.year) - 1970) * 10],
      ];
      L.polyline(polylineCoordinates, { color: 'red' }).addTo(map);

      const marker = L.marker([genre.y_axis, (((genre.year - 1970) * 20))], {
        icon: L.divIcon({
          className: 'leaflet-marker-icon',
          html: `<div>${genre.genre}</div>`,
          iconSize: [200, 40]
        })
      }).addTo(map);
    });

    const yearLayers = {};
    for (let year = 1970; year <= 2024; year++) {
      const marker = L.marker([0, ((year - 1970) * 10)], { icon: L.divIcon({ className: 'leaflet-marker-icon' }) }).bindTooltip(year.toString(), { permanent: year % 10 === 0, direction: 'bottom' });
      if (!map.hasLayer(marker)) {
        marker.addTo(map);
      }
      yearLayers[year] = marker;
    }
    const seen = [];
    const replacer = (key, value) => {
      if (value != null && typeof value === 'object') {
        if (seen.indexOf(value) >= 0) {
          return;
        }
        seen.push(value);
      }
      return value;
    };
    console.log(JSON.stringify(yearLayers, replacer));

    map.on('zoomend', () => {
      const zoom = map.getZoom();
      console.log('Zoom level:', zoom);
      for (let year in yearLayers) {
        if (zoom >= 2) {
          console.log('Adding year marker for year:', year);
          yearLayers[year].addTo(map);
        } else {
          if (year % 10 != 0) {
            console.log('Removing year marker for year:', year);
            yearLayers[year].removeFrom(map);
          }
        }
      }
    });

    mapContainer.current = map;
  }, []);

  return <div id="map" style={{ position: 'absolute', top: 0, left: 0, height: 'calc(100vh - 60px)', width: '100%' }}></div>;
}
