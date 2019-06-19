import React from 'react';
import './ComponentsCSS/FilterComponent.scss';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  specificPoiInfos: state.specificPoiInfos,
  poiKeywordsDisplay: state.poiKeywordsDisplay,
});

const FilterComponent = ({ poiKeywordsDisplay }) => (
  <div className="filterComponent">
    <h1>catégorie</h1>
    <button type="button">Points d'intérêts</button>
    <button type="button">évenement</button>
    <h1>Thème</h1>
    {poiKeywordsDisplay.map(keyword => (
      <button type="button" key={keyword.name}>{keyword.name}</button>))}
  </div>
);


export default connect(mapStateToProps)(FilterComponent);
