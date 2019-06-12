import React from 'react';
import './AppMap.css';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';
import userLocationUrl from '../picto/pinnnUser.svg';

const myIcon = L.icon({
  iconUrl: userLocationUrl,
  iconSize: [25, 41],
});


const AppMap = ({
  geolocCoordonnees, defaultCoordonnees, zoom, pins,
}) => (
  <Map center={geolocCoordonnees.length ? geolocCoordonnees : defaultCoordonnees} zoom={zoom}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker
      position={geolocCoordonnees.length ? geolocCoordonnees : defaultCoordonnees}
      icon={myIcon}
    >
      <Popup>
        User
      </Popup>
    </Marker>
    {pins.map(pin => (
      <Marker
        key={pin.id}
        position={pin.localisation}
      >
        <Popup>
          {pin.name}
        </Popup>
      </Marker>
    ))}
  </Map>
);

export default AppMap;
