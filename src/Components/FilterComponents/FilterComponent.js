import React from 'react';
import { connect } from 'react-redux';
import SelectFirstImportancePoi from './SelectFirstImportancePoi';
import SelectSecondImportancePoi from './SelectSecondImportancePoi';
import TopPageSvg from '../ComponentPins/TopPageSvg';
import BottomPageCheckSvg from '../ComponentPins/BottomPageCheckSvg';

const mapStateToProps = state => ({
  page: state.pois.filterPage,
  displaySecondImportancePoiPage: state.pois.displaySecondImportancePoiPage,
  filterKeywordPageDisplay: state.pois.filterKeywordPageDisplay,
});

const FilterComponent = ({ displaySecondImportancePoiPage, filterKeywordPageDisplay }) => (
  <div className="poi-create">
    <TopPageSvg />
    {filterKeywordPageDisplay && <SelectFirstImportancePoi />}
    {displaySecondImportancePoiPage && <SelectSecondImportancePoi />}
    <BottomPageCheckSvg />
  </div>
);


export default connect(mapStateToProps)(FilterComponent);
