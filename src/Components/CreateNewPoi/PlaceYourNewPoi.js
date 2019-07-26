import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';

const PlaceYourNewPoi = () => (
  <div className="placePoiContainer">
    <p className="step">Etape 1/5</p>
    <span>Veuillez placer votre nouveau point d'intéret.</span>
  </div>
);

export default connect()(PlaceYourNewPoi);
