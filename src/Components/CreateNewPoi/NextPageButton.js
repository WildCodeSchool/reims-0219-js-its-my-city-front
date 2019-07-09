import React from 'react';
import { connect } from 'react-redux';

const NextPageButton = ({ dispatch, labelKey }) => (
  <div>
    <button
      onClick={() => dispatch({
        type: 'NEXT_PAGE',
        labelKey,
      })}
      type="submit"
      className="buttonFormNext"
    >
    Suivant
    </button>
  </div>
);

export default connect()(NextPageButton);
