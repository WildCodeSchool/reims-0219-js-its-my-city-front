import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import { connect } from 'react-redux';
import AppMap from './Components/AppMap';
import SearchBar from './Components/SearchBar';
import FilterBar from './Components/filterBar';
import PoiInformation from './Components/PoiInformations';
import FilterComponent from './Components/FilterComponents/FilterComponent';
import CreatePoiForm from './Components/CreateNewPoi/CreatePoiReduxForm';
import Alert from './Components/Alert';

const mapStateToProps = state => ({
  geolocCoordonnees: state.pois.geolocCoordonnees,
  poiSampleDisplay: state.pois.poiSampleDisplay,
  specificPoiInfos: state.pois.specificPoiInfos,
  poiKeywordsDisplay: state.pois.poiKeywordsDisplay,
  isCreateFormDisplayed: state.pois.isCreateFormDisplayed,
  defaultCoordonnees: state.pois.defaultCoordonnees,
  createPoiFormInfos: state.form,
  conditionRating: state.pois.conditionRating,
  accessibilityRating: state.pois.accessibilityRating,
  operationRating: state.pois.operationRating,
  isFirstResearchDone: state.pois.isFirstResearchDone,
  filteredPoiByKeyword: state.pois.filteredPoiByKeyword,
  barsAreDisplayed: state.pois.barsAreDisplayed,
  displayFirstImportancePoiPage: state.pois.displayFirstImportancePoiPage,
  filterKeywordPageDisplay: state.pois.filterKeywordPageDisplay,
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
    if (geolocCoordonnees.length && geolocCoordonnees !== prevProps.geolocCoordonnees) {
      axios.get(`${process.env.REACT_APP_API_URL}/pois/sample/${geolocCoordonnees[0]}/${geolocCoordonnees[1]}`)
        .then(response => dispatch({ type: 'GET_POIS_SAMPLE', poiSampleDisplay: response.data }))
        .catch(err => console.log(err));
    }
  }

  render() {
    const {
      specificPoiInfos,
      isCreateFormDisplayed,
      isFirstResearchDone,
      filteredPoiByKeyword,
      barsAreDisplayed,
      filterKeywordPageDisplay,
      poiSampleDisplay,
    } = this.props;
    return (
      <div>
        {!poiSampleDisplay.length ? (
          <div className="loadingPage">
            <p>Attention mesdames et messieurs,</p>
            <p>dans un instant,</p>
            <p>ça va s'afficher...</p>
            <div className="loader" />
          </div>
        )
          : (

            <div>
              {barsAreDisplayed && <SearchBar />}
              { isFirstResearchDone
              && !filteredPoiByKeyword.length
              && <Alert />
              }

              <AppMap />
              {Object.keys(specificPoiInfos).length && <PoiInformation />}
              {!Object.keys(specificPoiInfos).length && barsAreDisplayed && <FilterBar />}
              {isCreateFormDisplayed && <CreatePoiForm />}
              {filterKeywordPageDisplay && <FilterComponent />}
            </div>
          )}
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
