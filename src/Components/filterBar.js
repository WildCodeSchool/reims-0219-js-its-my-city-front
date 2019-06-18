import React from 'react';
import './ComponentsCSS/filterBar.scss';
import { ReactComponent as LogoProfile } from './pictos/profile.svg';
import { ReactComponent as LogoFilter } from './pictos/filter.svg';
import { ReactComponent as LogoAdd } from './pictos/plus-full.svg';

const FilterBar = () => (
  <div>
    <div className="footer-box">
      <LogoFilter className="filter-logo" />
      <LogoAdd className="add-logo" />
      <LogoProfile className="profile-logo" />
    </div>
  </div>
);

export default FilterBar;
