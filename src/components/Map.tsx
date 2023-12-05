import { Component, createRef } from "react";
import L, { LatLngBoundsExpression, LatLngTuple } from "leaflet";
import Genres from "../data/genres.tsx";

class LeafletMap extends Component {
  mapContainerRef = createRef<HTMLDivElement>(); // Create a ref for the map container
  componentDidMount() {
    const mapContainer = this.mapContainerRef.current; // Get the map container using the ref
    if (mapContainer) {
      const bounds: LatLngBoundsExpression = [
        [-20, -20] as LatLngTuple,
        [1020, 1020] as LatLngTuple,
      ];
      const map = L.map(mapContainer).fitBounds(bounds); // Create the map and fit it to the bounds
      L.imageOverlay("../assets/1092392.jpg", bounds).addTo(map); // Add the image overlay to the map
      Genres.forEach((genre) => {
        const polylineCoordinates: LatLngTuple[] = [
          [genre.y_axis, 1020] as LatLngTuple,
          [genre.y_axis, genre.year / 10] as LatLngTuple];
        L.polyline(polylineCoordinates, { color: "red" }).addTo(map);
      });
    }
  }
  render() {
    return <div ref={this.mapContainerRef} style={{ height: "500px" }}></div>;
  }
}
export default LeafletMap;
