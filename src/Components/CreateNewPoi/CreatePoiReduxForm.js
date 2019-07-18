import React from 'react';
import { connect } from 'react-redux';
import PickCategory from './PickCategory';
import DescribeNewPoi from './DescribeNewPoi';
import RateNewPoi from './RateNewPoi';
import TakeAPicture from './TakeAPicture';
import PlaceYourNewPoi from './PlaceYourNewPoi';
import '../ComponentsCSS/createPoiForm.scss';
import TopPageSvg from '../ComponentPins/TopPageSvg';
import BottomPageNextSvg from '../ComponentPins/BottomPageNextSvg';
import BottomPageCheckSvg from '../ComponentPins/BottomPageCheckSvg';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

const CreatePoiForm = ({ page }) => (
  <div className="poi-create">
    <TopPageSvg />
    {page === 1 && <PlaceYourNewPoi />}
    {page === 2 && <TakeAPicture />}
    {page === 3 && <PickCategory />}
    {page === 4 && <DescribeNewPoi />}
    {page === 5 && <RateNewPoi />}
    {page === 5 ? <BottomPageCheckSvg /> : <BottomPageNextSvg />}
  </div>
);

export default connect(mapStateToProps)(CreatePoiForm);
