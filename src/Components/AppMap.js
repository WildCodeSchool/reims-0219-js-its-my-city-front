import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './ComponentsCSS/AppMap.css';
import { connect } from 'react-redux';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';
import Pins from './ComponentPins/Pins';

const mapStateToProps = state => ({
  zoom: state.zoom,
  geolocCoordonnees: state.geolocCoordonnees,
  defaultCoordonnees: state.defaultCoordonnees,
  poiSampleDisplay: state.poiSampleDisplay,
});

const customPins = keyword => L.divIcon({
  html: ReactDOMServer.renderToString(<Pins currentKeyword={keyword} />),
  iconSize: [60, 75],
});


const AppMap = ({
  geolocCoordonnees,
  defaultCoordonnees,
  zoom,
  poiSampleDisplay,
  showPoiInfos,
}) => (
  <Map center={geolocCoordonnees.length ? geolocCoordonnees : defaultCoordonnees} zoom={zoom}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={geolocCoordonnees.length ? geolocCoordonnees : defaultCoordonnees}>
      <Popup>
        User
      </Popup>
    </Marker>
    {poiSampleDisplay.map(pin => (
      <Marker
        icon={customPins(pin.id)}
        key={pin.id}
        onClick={() => showPoiInfos(pin.id)}
        position={pin.localisation}
      />
    ))}
  </Map>
);

export default connect(mapStateToProps)(AppMap);
