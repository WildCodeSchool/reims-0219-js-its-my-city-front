import React from 'react';
import { connect } from 'react-redux';
import TopPageSvg from '../ComponentPins/TopPageSvg'
import '../ComponentsCSS/UserPage.scss';

const mapStateToProps = state => ({
});

const UserPage = ({ dispatch }) => (
  <div className="UserPage">
    <TopPageSvg />
    <button
      onClick={() => dispatch({
        type: 'PREVIOUS_PAGE',
      })}
      type="submit"
      className="buttonForm"
    >
    Précédent
    </button>
    <h3>My Profile</h3>
  </div>
)

export default connect(mapStateToProps)(UserPage);
