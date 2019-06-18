import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import AppMap from './Components/AppMap';
import SearchBar from './Components/SearchBar';
import FooterBar from './Components/filterBar';
import PoiInformation from './Components/PoiInformations';

const mapStateToProps = state => ({
  geolocCoordonnees: state.geolocCoordonnees,
  poiSampleDisplay: state.poiSampleDisplay,
  specificPoiInfos: state.specificPoiInfos,
});


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    navigator.geolocation.watchPosition((position) => {
      dispatch({ type: 'GET_CURRENT_POSITION', geolocCoordonnees: [position.coords.latitude, position.coords.longitude] });
    });
    axios.get('http://localhost:3001/pois/sample')
      .then(response => dispatch({ type: 'GET_POIS_SAMPLE', poiSampleDisplay: response.data }))
      .catch(err => console.log(err));
  }


  render() {
    const {
      specificPoiInfos,
    } = this.props;
    return (
      <div>
        <SearchBar />
        <AppMap />
        {Object.keys(specificPoiInfos).length && <PoiInformation />}
        <FooterBar />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
