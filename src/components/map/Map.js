import React from "react";
import GoogleMapReact from "google-map-react";
import { FaMapPin } from "react-icons/fa";

// import "./map.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <FaMapPin className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <div className="map w-full lg:w-2/5">
    <h2 className="map-h2">You May Come Visit</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC0Ex7brFG7zJqc4EcugqHy8V5ff3GuDT0" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
