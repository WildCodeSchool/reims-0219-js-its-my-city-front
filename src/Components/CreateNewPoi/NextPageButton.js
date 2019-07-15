import React from 'react';
import { connect } from 'react-redux';

const NextPageButton = ({ dispatch, disabled }) => (
  <div>
    <button
      onClick={() => dispatch({
        type: 'NEXT_PAGE',
      })}
      type="button"
      className="buttonFormNext"
      disabled={disabled}
    >
      Suivant
    </button>
  </div>
);

export default connect()(NextPageButton);
