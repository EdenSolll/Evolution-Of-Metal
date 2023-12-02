import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Your existing React/TS code here...

// Create a Leaflet map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (you can use different map providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('A sample marker!');
