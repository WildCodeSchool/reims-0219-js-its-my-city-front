import React, { Component } from 'react';
import './App.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class App extends Component {
  state = {
    center: [49.2580045, 4.0317044],
    zoom: 14,
  };

  render() {
    return (
      <div>
        <Map center={this.state.center} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png"
          />
          <Marker position={this.state.center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}


export default App;
