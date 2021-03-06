import React from 'react';
import { connect } from 'react-redux';

const PreviousPageButton = ({ dispatch }) => (
  <div>
    <button
      onClick={() => dispatch({
        type: 'PREVIOUS_PAGE',
      })}
      type="button"
      className="buttonForm"
    >
      Précédent
    </button>
  </div>
);

export default connect()(PreviousPageButton);
