import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Genres from '../data/genres.tsx';

// Ensure that the map container element with ID 'map' exists in your HTML
const mapContainer = document.getElementById('map');

// Check if the map container element exists before proceeding
const LeafletMap = () => {
  const map = L.map(mapContainer, {
    crs: L.CRS.Simple,
    minZoom: -5
  });

  var bounds = [[-20, -20], [1020, 1020]];
  var image = L.imageOverlay('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3350716.jpg&f=1&nofb=1&ipt=aa915bbb5c24a16909de0a208eac83cf70e4104c27bb8250f43ed296a2089b97&ipo=images', bounds).addTo(map);

  // Generate polyline coordinates based on Genres array
  Genres.forEach((genre) => {
    const polylineCoordinates = [
      [genre.y_axis, 1020],
      [genre.y_axis, genre.year / 10],
    ];

    L.polyline(polylineCoordinates, {color: 'red'}).addTo(map);
  });
  mapContainer.style.width = '100vw';
  mapContainer.style.height = 'calc(100vh - 5em)'; // Use calc to subtract the height of the navbar
  map.setView([500, 500], 0);
}
  export default LeafletMap
