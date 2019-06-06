import React, { Component } from 'react';
import './App.css';
import AppMap from './Components/AppMap';

import FirstFetch from './Components/FirstFetch';

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
    fetch(URL)
      .then(response => response.json())
      .then(responseInJson => this.setState({ poiSampleDisplay: responseInJson.results }));
  }

  render() {
    const { coordonnees, zoom, poiSampleDisplay } = this.state;
    return (
      <div>
        { poiSampleDisplay.map(
          (currentPinsPosition, index) => <FirstFetch key={index} pins={currentPinsPosition} />,
        )}
        {coordonnees.length && <AppMap coordonnees={coordonnees} zoom={zoom} />}
      </div>
    );
  }
}


export default App;
