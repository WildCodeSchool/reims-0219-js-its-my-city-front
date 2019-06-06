import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AppMap from './Components/AppMap';

class App extends Component {
  state = {
    zoom: 14,
    coordonnees: [],
    poiSampleDisplay: [],
  };


  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ coordonnees: [position.coords.latitude, position.coords.longitude] });
    });
    axios.get('http://localhost:3001/pois/sample')
      .then(response => this.setState({ poiSampleDisplay: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { coordonnees, zoom, poiSampleDisplay } = this.state;
    return (
      <div>
        {coordonnees.length && <AppMap pins={poiSampleDisplay} coordonnees={coordonnees} zoom={zoom} />}
      </div>
    );
  }
}


export default App;
