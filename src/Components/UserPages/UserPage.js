import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/UserPage.scss';

const mapStateToProps = state => ({
});

const UserPage = ({ dispatch }) => (
  <div>
    <p>test</p>
  </div>
)

export default connect(mapStateToProps)(UserPage);
