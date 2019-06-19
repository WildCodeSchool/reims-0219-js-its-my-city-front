import React from 'react';
import './ComponentsCSS/FilterComponent.scss';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  specificPoiInfos: state.specificPoiInfos,
});

const FilterComponent = ({ dispatch }) => (
  <div className="filterComponent">
    <div>
      <h1>catégorie</h1>
      <button type="button">Points d'intérêts</button>
      <button type="button">évenement</button>
    </div>
    <div>
      <h1>Thème</h1>
      <button type="button" />
    </div>
  </div>
);


export default connect(mapStateToProps)(FilterComponent);
