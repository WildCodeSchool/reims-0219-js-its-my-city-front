import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

const NextPageButton = ({ dispatch, page }) => (
  <div>
    <button
      onClick={() => dispatch({
        type: 'NEXT_PAGE',
        page: page + 1,
      })}
      type="submit"
      className="next"
    >
    Suivant
    </button>
  </div>
);

export default connect(mapStateToProps)(NextPageButton);
