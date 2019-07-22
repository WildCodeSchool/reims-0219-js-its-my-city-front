import React from 'react';
import { connect } from 'react-redux';
import PickCategory from './PickCategory';
import DescribeNewPoi from './DescribeNewPoi';
import RateNewPoi from './RateNewPoi';
import TakeAPicture from './TakeAPicture';
import PlaceYourNewPoi from './PlaceYourNewPoi';
import '../ComponentsCSS/createPoiForm.scss';
import TopPageSvg from '../ComponentPins/TopPageSvg';
import formButtonSvg from '../../Functions/formBottomSvg';

const mapStateToProps = state => ({
  page: state.display.formPage,
  form: state.form,
  isPageCompleted: state.display.isPageCompleted,
  customCoordonnes: state.map.customCoordonnes,
});

const CreatePoiForm = ({ page, isPageCompleted, form }) => (
  <div className="poi-create">
    <TopPageSvg />
    {page === 1 && <PlaceYourNewPoi />}
    {page === 2 && <TakeAPicture />}
    {page === 3 && <PickCategory />}
    {page === 4 && <DescribeNewPoi />}
    {page === 5 && <RateNewPoi />}
    {formButtonSvg(isPageCompleted, page, form)}
  </div>
);

export default connect(mapStateToProps)(CreatePoiForm);
