import React from 'react';
import "../sheets/map.module.css";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function MyMap() {
  return (
    <MapContainer className='leaflet-conteiner' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
  )
}

export default React.memo(MyMap)