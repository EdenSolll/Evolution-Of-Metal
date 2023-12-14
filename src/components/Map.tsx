import { useEffect, useRef } from 'react';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Genres from '../data/genres.tsx';

export default function Map() {
 const lineLayer = useRef(null);
 const imageOverlay = useRef(null);
 const mapContainer = useRef(null);

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
 attributionControl: false
 }).setView([200, -75], 0);

 var imageUrl = 'https://www.metal-archives.com/images/6/6/6/6/666668.jpg?0304',
 bounds = [[-20, -20], [520, 520]];

 if (imageOverlay.current) {
 map.removeLayer(imageOverlay.current);
 }

 imageOverlay.current = L.imageOverlay(imageUrl, bounds).addTo(map);

 lineLayer.current = L.layerGroup().addTo(map);

 Genres.forEach((genre) => {
 const polylineCoordinates: LatLngTuple[] = [
  [genre.y_axis, 520],
  [genre.y_axis, genre.year / 100],
 ];
 L.polyline(polylineCoordinates, { color: 'red' }).addTo(map);
 });

 mapContainer.current = map;
 }, []);

 return <div id="map" style={{ position: 'absolute', top: 0, left: 0, height: 'calc(100vh - 60px)', width: '100%' }}></div>;
}
