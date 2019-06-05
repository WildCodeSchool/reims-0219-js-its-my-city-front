import React from 'react';
import './AppMap.css';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';

const AppMap = ({ coordonnees, zoom }) => (
  <Map center={coordonnees} zoom={zoom}>
    <TileLayer url="https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png" />
    <Marker position={coordonnees}>
      <Popup>
        User
      </Popup>
    </Marker>
  </Map>
);

export default AppMap;
