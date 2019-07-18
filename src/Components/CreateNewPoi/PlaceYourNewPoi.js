import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';
import BottomPageNextSvg from '../ComponentPins/BottomPageNextSvg';
import BottomPageCloseSvg from '../ComponentPins/BottomPageCloseSvg';


const mapStateToProps = state => ({
  customCoordonnes: state.pois.customCoordonnes,
});

const PlaceYourNewPoi = ({ customCoordonnes }) => (
  <div className="placePoiContainer">
    <p className="step">Etape 1/5</p>
    <span>Veuillez placer votre nouveau point d'intéret.</span>
    {customCoordonnes[0] !== 0 && customCoordonnes[1] !== 0
      ? <BottomPageNextSvg /> : <BottomPageCloseSvg /> }
  </div>
);

export default connect(mapStateToProps)(PlaceYourNewPoi);
