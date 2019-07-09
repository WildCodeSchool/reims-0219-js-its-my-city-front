import React from 'react';
import { connect } from 'react-redux';

const NextPageButton = ({ dispatch }) => (
  <div>
    <button
      onClick={() => dispatch({
        type: 'NEXT_PAGE',
      })}
      type="submit"
      className="buttonFormNext"
    >
    Suivant
    </button>
  </div>
);

export default connect()(NextPageButton);
