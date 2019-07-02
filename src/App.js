import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import { connect } from 'react-redux';
import AppMap from './Components/AppMap';
import SearchBar from './Components/SearchBar';
import FilterBar from './Components/filterBar';
import PoiInformation from './Components/PoiInformations';
import FilterComponent from './Components/FilterComponent';
import CreatePoiForm from './Components/CreateNewPoi/CreatePoiReduxForm';

const mapStateToProps = state => ({
  geolocCoordonnees: state.pois.geolocCoordonnees,
  poiSampleDisplay: state.pois.poiSampleDisplay,
  specificPoiInfos: state.pois.specificPoiInfos,
  filterKeywordPageDisplay: state.pois.filterKeywordPageDisplay,
  poiKeywordsDisplay: state.pois.poiKeywordsDisplay,
  isCreateFormDisplayed: state.pois.isCreateFormDisplayed,
  defaultCoordonnees: state.pois.defaultCoordonnees,
  createPoiFormInfos: state.form,
  conditionRating: state.pois.conditionRating,
  accessibilityRating: state.pois.accessibilityRating,
  operationRating: state.pois.operationRating,
  barsAreDisplayed: state.pois.barsAreDisplayed,
});


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    navigator.geolocation.watchPosition((position) => {
      dispatch({ type: 'GET_CURRENT_POSITION', geolocCoordonnees: [position.coords.latitude, position.coords.longitude] });
    });
    axios.get(`${process.env.REACT_APP_API_URL}/pois/keywords`)
      .then(response => dispatch({ type: 'GET_POIS_KEYWORDS', poiKeywordsDisplay: response.data }))
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps) {
    const { dispatch, geolocCoordonnees } = this.props;
    if (geolocCoordonnees !== prevProps.geolocCoordonnees) {
      axios.get(`${process.env.REACT_APP_API_URL}/pois/sample/${geolocCoordonnees[0]}/${geolocCoordonnees[1]}`)
        .then(response => dispatch({ type: 'GET_POIS_SAMPLE', poiSampleDisplay: response.data }))
        .catch(err => console.log(err));
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {
      createPoiFormInfos,
      geolocCoordonnees,
      accessibilityRating,
      conditionRating,
      operationRating,
    } = this.props;
    axios.post(`${process.env.REACT_APP_API_URL}/pois`, {
      name: createPoiFormInfos.wizard.values.poiDesc,
      latitude: geolocCoordonnees[0],
      longitude: geolocCoordonnees[1],
      keyword: createPoiFormInfos.wizard.values.categoryKeyword,
      author_id: 'Wilder',
      global_grade: 4,
      accessibility: accessibilityRating,
      condition: conditionRating,
      functional: operationRating,

    });
  }


  render() {
    const {
      specificPoiInfos,
      filterKeywordPageDisplay,
      isCreateFormDisplayed,
      barsAreDisplayed,
      poiSampleDisplay,
    } = this.props;
    return (
      <div>
        {!poiSampleDisplay.length && (
        <div>
          Please wait while your map is loading...
        </div>
        )}
        {poiSampleDisplay.length && (
        <div>
          {barsAreDisplayed && <SearchBar />}
          <AppMap />
          {Object.keys(specificPoiInfos).length && <PoiInformation />}
          {!Object.keys(specificPoiInfos).length && barsAreDisplayed === true && <FilterBar />}
          {filterKeywordPageDisplay && <FilterComponent />}
          <FilterBar />
          {isCreateFormDisplayed && <CreatePoiForm />}
        </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
