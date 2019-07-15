import React from 'react';
import { connect } from 'react-redux';

const PreviousPageButton = ({ dispatch }) => (
  <div>
    <button
      onClick={() => dispatch({
        type: 'PREVIOUS_PAGE',
      })}
      type="submit"
      className="buttonForm"
    >
    Précédent
    </button>
  </div>
);

export default connect()(PreviousPageButton);
