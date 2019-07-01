import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  customCoordonnes: state.pois.customCoordonnes,
  page: state.pois.formPage,
});

const PlaceYourNewPoi = ({ page, customCoordonnes, dispatch }) => (
  <div>
    <h1>Veuillez placer votre nouveau point d'intéret.</h1>
    {customCoordonnes[0] !== 0 && customCoordonnes[1] !== 0
    && <button onClick={() => dispatch({ type: 'NEXT_PAGE', page: page + 1 })} type="button">Suivant</button>}
  </div>
);

export default connect(mapStateToProps)(PlaceYourNewPoi);
