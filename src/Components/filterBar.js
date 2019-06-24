import React from 'react';
import { connect } from 'react-redux';
import './ComponentsCSS/filterBar.scss';
import { ReactComponent as LogoProfile } from './pictos/profile.svg';
import { ReactComponent as LogoFilter } from './pictos/filter.svg';
import { ReactComponent as LogoAdd } from './pictos/plus-full.svg';


const FilterBar = ({ dispatch }) => (
  <div>
    <div className="footer-box">
      <LogoFilter className="filter-logo" />
      <LogoAdd
        className="add-logo"
        onClick={() => dispatch({ type: 'TOGGLE_POI_CREATION_FORM'})} />
      <LogoProfile className="profile-logo" />
    </div>
  </div>
);

export default connect()(FilterBar);
