import React from 'react';
import { connect } from 'react-redux';
import './ComponentsCSS/filterBar.scss';
import { ReactComponent as LogoFooterBar } from './pictos/FooterBar.svg';
import { ReactComponent as LogoProfile } from './pictos/profile.svg';
import { ReactComponent as LogoFilter } from './pictos/filter.svg';
import { ReactComponent as LogoAdd } from './pictos/plus-full.svg';

const mapStateToProps = state => ({
  filterKeywordPageDisplay: state.filterKeywordPageDisplay,
});

const FilterBar = ({ dispatch }) => (
  <div className="footer-box">
    <LogoFooterBar className="footer-bar" />
    <div className="footer-box-button">
      <LogoFilter className="filter-logo" onClick={() => dispatch({ type: 'DISPLAY_FILTER_PAGE' })} />
      <LogoAdd className="add-logo" onClick={() => dispatch({ type: 'TOGGLE_POI_CREATION_FORM' })} />
      <LogoProfile className="profile-logo" />
    </div>
  </div>
);

export default connect(mapStateToProps)(FilterBar);
