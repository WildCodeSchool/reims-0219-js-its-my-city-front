import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

const PreviousPageButton = ({ dispatch, page }) => (
  <div>
    <button
      onClick={() => dispatch({
        type: 'PREVIOUS_PAGE',
        page: page - 1,
      })}
      type="submit"
      className="buttonForm"
    >
    Précédent
    </button>
  </div>
);

export default connect(mapStateToProps)(PreviousPageButton);
