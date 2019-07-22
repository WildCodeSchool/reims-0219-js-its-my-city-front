import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './ComponentsCSS/AppMap.scss';
import { connect } from 'react-redux';
import {
  Map, TileLayer, Marker, LeafletConsumer,
} from 'react-leaflet';
import L from 'leaflet';
import userLocationUrl from './pictos/PinUser.svg';
import Pins from './ComponentPins/Pins';
import MapZoom from '../Functions/MapZoom';

require('leaflet-easybutton');
require('leaflet-easybutton/src/easy-button.css');

const myIcon = L.icon({
  iconUrl: userLocationUrl,
  iconSize: [80, 80],
});

const mapStateToProps = state => ({
  zoom: state.map.zoom,
  geolocCoordonnees: state.map.geolocCoordonnees,
  defaultCoordonnees: state.map.defaultCoordonnees,
  customCoordonnes: state.map.customCoordonnes,
  poiSampleDisplay: state.pois.poiSampleDisplay,
  filteredPoiByKeyword: state.keywords.filteredPoiByKeyword,
  isCreateFormDisplayed: state.display.isCreateFormDisplayed,
  page: state.display.formPage,
  newPoiCoordinates: state.dataForm.newPoiCoordinates,
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
  newPoiCoordinates,
  dispatch,
}) => (
  <Map
    center={
      MapZoom(geolocCoordonnees, defaultCoordonnees, newPoiCoordinates).length
        ? MapZoom(geolocCoordonnees, defaultCoordonnees, newPoiCoordinates)
        : defaultCoordonnees
    }
    zoom={zoom}
    zoomControl={false}
    onClick={(e) => {
      if (isCreateFormDisplayed && page === 1) {
        dispatch({ type: 'ADD_CUSTOM_MARKER', customCoordonnes: [e.latlng.lat, e.latlng.lng] });
      }
    }}
  >
    {geolocCoordonnees.length !== 0 && (
      <LeafletConsumer>
        {(context) => {
          L.easyButton('<img src="https://image.flaticon.com/icons/png/512/104/104419.png">', (btn, map) => {
            const currentPosition = geolocCoordonnees;
            map.setView(currentPosition);
          }).addTo(context.map);
        }}
      </LeafletConsumer>
    )}
    <TileLayer url="https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png" />
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
