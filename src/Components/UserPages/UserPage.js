import React from 'react';
import { connect } from 'react-redux';
import TopPageSvg from '../ComponentPins/TopPageSvg';
import BottomPageCheckSvg from '../ComponentPins/BottomPageCheckSvg';
import Math from './math.png';
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
    <div>
      <img src={Math} alt="Userimage" />
    </div>
    <BottomPageCheckSvg />
  </div>
)

export default connect(mapStateToProps)(UserPage);
