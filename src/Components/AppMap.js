import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './ComponentsCSS/AppMap.scss';
import { connect } from 'react-redux';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';
import userLocationUrl from './pictos/PinUser.svg';
import Pins from './ComponentPins/Pins';

const myIcon = L.icon({
  iconUrl: userLocationUrl,
  iconSize: [80, 80],
});

const mapStateToProps = state => ({
  zoom: state.pois.zoom,
  geolocCoordonnees: state.pois.geolocCoordonnees,
  defaultCoordonnees: state.pois.defaultCoordonnees,
  poiSampleDisplay: state.pois.poiSampleDisplay,
  filteredPoiByKeyword: state.pois.filteredPoiByKeyword,
  customCoordonnes: state.pois.customCoordonnes,
  isCreateFormDisplayed: state.pois.isCreateFormDisplayed,
  page: state.pois.formPage,
});

const customPins = keyword => L.divIcon({
  html: ReactDOMServer.renderToString(<Pins currentKeyword={keyword} />),
  iconSize: [40, 65],
});

const AppMap = ({
  geolocCoordonnees,
  defaultCoordonnees,
  zoom,
  poiSampleDisplay,
  filteredPoiByKeyword,
  customCoordonnes,
  isCreateFormDisplayed,
  page,
  dispatch,
}) => (
  // eslint-disable-next-line max-len
  <Map
    center={geolocCoordonnees.length ? geolocCoordonnees : defaultCoordonnees}
    zoom={zoom}
    zoomControl={false}
    onClick={(e) => {
      if (isCreateFormDisplayed && page === 1) {
        dispatch({ type: 'ADD_CUSTOM_MARKER', customCoordonnes: [e.latlng.lat, e.latlng.lng] });
      }
    }}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {isCreateFormDisplayed && (
    <Marker
      position={customCoordonnes.length ? customCoordonnes : defaultCoordonnees}
      draggable={page === 1}
    />
    )}

    <Marker
      position={geolocCoordonnees.length ? geolocCoordonnees : defaultCoordonnees}
      icon={myIcon}
    />
    {/* Poi sample at first render, if there's a filter applied, only show those pois,
    then none if no corresponding keywords from the research */}
    {!filteredPoiByKeyword.length
      ? poiSampleDisplay.map(poi => (
        <Marker
          icon={customPins(poi.firstImportanceKeyword)}
          key={poi.id}
          onClick={() => dispatch({ type: 'SHOW_POI_INFOS', specificPoiInfos: poi })}
          position={poi.localisation}
        />
      ))
      : filteredPoiByKeyword.map(poi => (
        <Marker
          icon={customPins(poi.firstImportanceKeyword)}
          key={poi.id}
          onClick={() => dispatch({ type: 'SHOW_POI_INFOS', specificPoiInfos: poi })}
          position={poi.localisation}
        />
      ))}
  </Map>
);

export default connect(mapStateToProps)(AppMap);
