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
  conditionRating, operationRating, accessibilityRating,
}) => (
  <div className="poi-create">
    <PoiRating label="Note d'état:" type="RATING_CONDITION_CHANGE" rating={conditionRating} />
    <PoiRating label="Note de fonctionnement" type="RATING_OPERATION_CHANGE" rating={operationRating} />
    <PoiRating label="note d'accessibilité" type="RATING_ACCESSIBILITY_CHANGE" rating={accessibilityRating} />
  </div>
);

export default connect(mapStateToProps)(RateNewPoiFields);
