import React from 'react';
import { connect } from 'react-redux';
import NextPageButton from './NextPageButton';

const mapStateToProps = state => ({
  customCoordonnes: state.pois.customCoordonnes,
  page: state.pois.formPage,
});

const PlaceYourNewPoi = ({ customCoordonnes }) => (
  <div>
    <span>Veuillez placer votre nouveau point d'intéret.</span>
    {customCoordonnes[0] !== 0 && customCoordonnes[1] !== 0
    && <NextPageButton />}
  </div>
);

export default connect(mapStateToProps)(PlaceYourNewPoi);
