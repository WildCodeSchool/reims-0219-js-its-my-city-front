/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';
import { ReactComponent as Starcolor } from '../pictos/Starcolor.svg';
import { ReactComponent as StarUncolor } from '../pictos/StarUncolor.svg';

const scoreRating = [1, 2, 3, 4, 5];

const mapStateToProps = state => ({
  conditionRating: state.pois.conditionRating,
  operationRating: state.pois.operationRating,
  accessibilityRating: state.pois.accessibilityRating,
});

const PoiThirdPageFields = ({
  dispatch, conditionRating, operationRating, accessibilityRating,
}) => (
  <div className="poi-create">
    <label>Note d'état:</label>
    <div className="conditionRating">
      {scoreRating.map(rating => (
        <div
          key={rating}
          className="rating"
          onClick={() => dispatch({
            type: 'RATING_CONDITION_CHANGE',
            conditionRating: rating,
          })}
        >
          {rating <= conditionRating ? <Starcolor /> : <StarUncolor />}
        </div>
      ))}
    </div>
    <label>Note de fonctionnement:</label>
    <div className="operationRating">
      {scoreRating.map(rating => (
        <div
          key={rating}
          className="rating"
          onClick={() => dispatch({
            type: 'RATING_OPERATION_CHANGE',
            operationRating: rating,
          })}
        >
          {rating <= operationRating ? <Starcolor /> : <StarUncolor />}
        </div>
      ))}
    </div>
    <label>Note de accessibilité:</label>
    <div className="accessibilityRating">
      {scoreRating.map(rating => (
        <div
          key={rating}
          className="rating"
          onClick={() => dispatch({
            type: 'RATING_ACCESSIBILITY_CHANGE',
            accessibilityRating: rating,
          })}
        >
          {rating <= accessibilityRating ? <Starcolor /> : <StarUncolor />}
        </div>
      ))}
    </div>
  </div>
);

export default connect(mapStateToProps)(PoiThirdPageFields);
