import React from 'react';
import "../style_sheets/map.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -34.4446482,
  lng: -58.7026321
};

function MyComponent() {
  return (
    <div className="map">
    <LoadScript className="map"
      googleMapsApiKey="AIzaSyCOBJTKTOghryGe0rk1pO7JVnlaoWu029Y"
    >
      <GoogleMap className="map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default React.memo(MyComponent)