import React from 'react';
import { connect } from 'react-redux';
import SelectCategorie from './SelectCategorie';
import SelectSecondImportancePoi from './SelectSecondImportancePoi';

const mapStateToProps = state => ({
  page: state.pois.filterPage,
});

const FilterComponent = ({ page }) => (
  <div>
    {page === 1 && <SelectCategorie />}
    {page === 2 && <SelectSecondImportancePoi />}
  </div>
);


export default connect(mapStateToProps)(FilterComponent);
