import React from 'react';
import './AppMap.css';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';

const AppMap = ({ coordonnees, zoom, pins }) => (
  <Map center={coordonnees} zoom={zoom}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={coordonnees}>
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
