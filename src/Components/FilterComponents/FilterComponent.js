import React from 'react';
import { connect } from 'react-redux';
import SelectFirstImportancePoi from './SelectFirstImportancePoi';
import SelectSecondImportancePoi from './SelectSecondImportancePoi';

const mapStateToProps = state => ({
  page: state.pois.filterPage,
  displaySecondImportancePoiPage: state.pois.displaySecondImportancePoiPage,
  filterKeywordPageDisplay: state.pois.filterKeywordPageDisplay,
});

const FilterComponent = ({ displaySecondImportancePoiPage, filterKeywordPageDisplay }) => (
  <div>
    {filterKeywordPageDisplay && <SelectFirstImportancePoi />}
    {displaySecondImportancePoiPage && <SelectSecondImportancePoi />}
  </div>
);


export default connect(mapStateToProps)(FilterComponent);
