import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import AppMap from './Components/AppMap';
import PoiInformation from './Components/PoiInformations';

const mapStateToProps = state => ({
  zoom: state.zoom,
  geolocCoordonnees: state.geolocCoordonnees,
  defaultCoordonnees: state.defaultCoordonnees,
  poiSampleDisplay: state.poiSampleDisplay,
  specificPoiInfos: state.specificPoiInfos,
});


class App extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.dispatch({ type: 'GET_CURRENT_POSITION', geolocCoordonnees: [position.coords.latitude, position.coords.longitude] });
    });
    axios.get('http://localhost:3001/pois/sample')
      .then(response => this.props.dispatch({ type: 'GET_POIS_SAMPLE', poiSampleDisplay: response.data }))
      .catch(err => console.log(err));
  }

  showPoiInfos = (id) => {
    axios.get(`http://localhost:3001/pois/${id}`)
      .then(response => this.props.dispatch({ type: 'GET_POI_INFOS', specificPoiInfos: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    const {
      poiSampleDisplay,
      geolocCoordonnees,
      defaultCoordonnees,
      zoom,
      specificPoiInfos,
    } = this.props;
    return (
      <div>
        <AppMap
          pins={poiSampleDisplay}
          geolocCoordonnees={geolocCoordonnees}
          defaultCoordonnees={defaultCoordonnees}
          zoom={zoom}
          showPoiInfos={this.showPoiInfos}
        />
        {specificPoiInfos.length && <PoiInformation specificPoiInfos={specificPoiInfos[0]} />}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
