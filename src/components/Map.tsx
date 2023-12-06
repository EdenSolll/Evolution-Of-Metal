import { useEffect } from 'react';
import L, { LatLngBoundsExpression, LatLngTuple } from 'leaflet';
import Genres from '../data/genres.tsx';

export default function Map() {
  useEffect(() => {
    const mapContainer = L.DomUtil.get('map');

    if (mapContainer != null) {
      mapContainer._leaflet_id = null;
    }

    const map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -5,
    });

    var imageUrl = 'https://www.metal-archives.com/images/6/6/6/6/666668.jpg?0304',
    bounds = [[-20, -20], [1020, 1020]];

    L.imageOverlay(imageUrl, bounds).addTo(map);

    map.setView([500, 500], 0);

    Genres.forEach((genre) => {
      const polylineCoordinates: LatLngTuple[] = [
        [genre.y_axis, 1020],
        [genre.y_axis, genre.year / 10],
      ];
      L.polyline(polylineCoordinates, { color: 'red' }).addTo(map);
    });
  }, []);
  return <div id="map" style={{ height: '100vh' }}></div>;
}
