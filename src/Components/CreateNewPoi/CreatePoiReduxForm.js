import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreatePoiFirstPage from './CreatePoiFirstPage';
import CreatePoiSecondPage from './CreatePoiSecondPage';
import CreatePoiThirdPage from './CreatePoiThirdPage';
import CreatePoiFourthPage from './CreatePoiFourthPage';
import '../ComponentsCSS/createPoiForm.scss';
import PlaceYourNewPoi from './PlaceYourNewPoi';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});


const CreatePoiForm = ({ page, onSubmit }) => (
  <div className="poi-create">
    {page === 1 && <PlaceYourNewPoi /> }
    {page === 2 && <CreatePoiFirstPage />}
    {page === 3
          && (
          <CreatePoiSecondPage />
          )}
    {page === 4
          && (
          <CreatePoiThirdPage />
          )}
    {page === 5
          && (
          <CreatePoiFourthPage
            handleSubmit={onSubmit}
          />
          )}
  </div>
);

CreatePoiForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CreatePoiForm);
