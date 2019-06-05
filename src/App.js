import React, { Component } from 'react';
import './App.css';
import AppMap from './Components/AppMap';

class App extends Component {
  state = {
    zoom: 14,
    coordonnees: [],
  };


  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ coordonnees: [position.coords.latitude, position.coords.longitude] });
    });
  }

  render() {
    const { coordonnees, zoom } = this.state;
    return (
      <div>
        {coordonnees.length && <AppMap coordonnees={coordonnees} zoom={zoom} />}
      </div>
    );
  }
}


export default App;
