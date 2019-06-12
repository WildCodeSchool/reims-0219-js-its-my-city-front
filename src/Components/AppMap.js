import React from 'react';
import './AppMap.css';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';

const AppMap = ({
  geolocCoordonnees, defaultCoordonnees, zoom, pins,
}) => (
  <Map center={geolocCoordonnees.length ? geolocCoordonnees : defaultCoordonnees} zoom={zoom} zoomControl={false}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={geolocCoordonnees.length ? geolocCoordonnees : defaultCoordonnees}>
      <Popup>
        User
      </Popup>
    </Marker>
    {pins.map(pin => (
      <Marker key={pin.id} position={pin.localisation}>
        <Popup>
          {pin.name}
        </Popup>
      </Marker>
    ))}
  </Map>
);

export default AppMap;
