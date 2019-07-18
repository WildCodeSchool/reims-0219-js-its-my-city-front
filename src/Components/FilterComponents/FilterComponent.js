import React from 'react';
import { connect } from 'react-redux';
import SelectFirstImportancePoi from './SelectFirstImportancePoi';
import SelectSecondImportancePoi from './SelectSecondImportancePoi';
import TopPageSvg from '../ComponentPins/TopPageSvg';
import BottomPageCheckSvg from '../ComponentPins/BottomPageCheckSvg';

const mapStateToProps = state => ({
  page: state.display.filterPage,
});

const FilterComponent = ({ page }) => (
  <div className="poi-create">
    <TopPageSvg />
    {page === 1 && <SelectFirstImportancePoi />}
    {page === 2 && <SelectSecondImportancePoi />}
    <BottomPageCheckSvg />
  </div>
);


export default connect(mapStateToProps)(FilterComponent);
