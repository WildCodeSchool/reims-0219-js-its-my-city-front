import React from 'react';
import { connect } from 'react-redux';
import SelectCategorie from './SelectCategorie';
import SelectFirstImportancePoi from './SelectFirstImportancePoi';
import SelectSecondImportancePoi from './SelectSecondImportancePoi';
import '../ComponentsCSS/createPoiForm.scss';

const mapStateToProps = state => ({
  page: state,
});

const FilterPages = ({ page }) => (
  <div className="filter-pages">
    {page === 1 && <SelectCategorie />}
    {page === 2 && <SelectFirstImportancePoi />}
    {page === 3 && <SelectSecondImportancePoi />}
  </div>
);

export default connect(mapStateToProps)(FilterPages);