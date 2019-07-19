import React from 'react';
import { connect } from 'react-redux';
import SelectFirstImportancePoi from './SelectFirstImportancePoi';
import SelectSecondImportancePoi from './SelectSecondImportancePoi';
import TopPageSvg from '../ComponentPins/TopPageSvg';
import BottomPageCheckSvg from '../ComponentPins/BottomPageCheckSvg';
import BottomPageCloseSvg from '../ComponentPins/BottomPageCloseSvg';

const mapStateToProps = state => ({
  page: state.pois.filterPage,
});

const FilterComponent = ({ page }) => (
  <div className="poi-create">
    <TopPageSvg />
    {page === 1 && <SelectFirstImportancePoi />}
    {page === 2 && <SelectSecondImportancePoi />}
    {page === 1 ? <BottomPageCloseSvg /> : <BottomPageCheckSvg />}
  </div>
);


export default connect(mapStateToProps)(FilterComponent);
