/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';
import PoiRating from './PoiRating';

const mapStateToProps = state => ({
  conditionRating: state.pois.conditionRating,
  operationRating: state.pois.operationRating,
  accessibilityRating: state.pois.accessibilityRating,
});

const RateNewPoiFields = ({
  conditionRating, operationRating, accessibilityRating, dispatch,
}) => {
  const PoiEvaluations = [
    { label: 'Note d\'état:', type: 'RATING_CONDITION_CHANGE', rating: conditionRating },
    { label: 'Note de fonctionnement', type: 'RATING_OPERATION_CHANGE', rating: operationRating },
    { label: 'Note d\'accessibilité', type: 'RATING_ACCESSIBILITY_CHANGE', rating: accessibilityRating },
  ];
  return (
    <div className="poi-create">
      {PoiEvaluations.map(PoiEvaluation => (
        <PoiRating
          label={PoiEvaluation.label}
          type={PoiEvaluation.type}
          rating={PoiEvaluation.rating}
          dispatch={dispatch}
        />
      )) }
    </div>
  );
};

export default connect(mapStateToProps)(RateNewPoiFields);
