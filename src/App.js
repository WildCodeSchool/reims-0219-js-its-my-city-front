import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AppMap from './Components/AppMap';


class App extends Component {
  state = {
    zoom: 14,
    geolocCoordonnees: [],
    defaultCoordonnees: [49.260096, 4.030293],
    poiSampleDisplay: [],
  };


  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ geolocCoordonnees: [position.coords.latitude, position.coords.longitude] });
    });
    axios.get('http://localhost:3001/pois/sample')
      .then(response => this.setState({ poiSampleDisplay: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    const {
      geolocCoordonnees, defaultCoordonnees, zoom, poiSampleDisplay,
    } = this.state;
    return (
      <div>
        <AppMap
          pins={poiSampleDisplay}
          geolocCoordonnees={geolocCoordonnees}
          defaultCoordonnees={defaultCoordonnees}
          zoom={zoom}
        />
      </div>
    );
  }
}


export default App;
