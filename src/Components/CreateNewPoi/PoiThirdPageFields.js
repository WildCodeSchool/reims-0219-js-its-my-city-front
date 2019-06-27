/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';

const scoreRating = [1, 2, 3, 4, 5];

const mapStateToProps = state => ({
  conditionRating: state.pois.conditionRating,
  operationRating: state.pois.operationRating,
});

const PoiThirdPageFields = ({
  dispatch,
}) => (
  <div className="poi-create">
    <label>Note d'état:</label>
    <div className="conditionRating">
      {scoreRating.map(rating => (
        <div
          className="rating"
          onClick={() => dispatch({
            type: 'RATING_CONDITION_CHANGE',
            conditionRating: rating,
          })}
        >
          {rating}
        </div>
      ))}
    </div>
    <label>Note de fonctionnement:</label>
    <div className="operationRating">
      {scoreRating.map(rating => (
        <div
          className="rating"
          onClick={() => dispatch({
            type: 'RATING_OPERATION_CHANGE',
            operationRating: rating,
          })}
        >
          {rating}
        </div>
      ))}
    </div>
    <label>Note de accessibilité:</label>
    <div className="accessibilityRating">
      {scoreRating.map(rating => (
        <div
          className="rating"
          onClick={() => dispatch({
            type: 'RATING_ACCESSIBILITY_CHANGE',
            accessibilityRating: rating,
          })}
        >
          {rating}
        </div>
      ))}
    </div>
  </div>
);

export default connect(mapStateToProps)(PoiThirdPageFields);
