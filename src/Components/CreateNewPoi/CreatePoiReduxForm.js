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
import BottomPageCloseSvg from '../ComponentPins/BottomPageCloseSvg';

const mapStateToProps = state => ({
  customCoordonnes: state.pois.customCoordonnes,
  page: state.pois.formPage,
});

const CreatePoiForm = ({ page, customCoordonnes }) => (
  <div className="poi-create">
    <TopPageSvg />
    {page === 1 && <PlaceYourNewPoi />}
    {page === 2 && <TakeAPicture />}
    {page === 3 && <PickCategory />}
    {page === 4 && <DescribeNewPoi />}
    {page === 5 && <RateNewPoi />}
    {page === 5 ? <BottomPageCheckSvg /> : (customCoordonnes[0] !== 0 && customCoordonnes[1] !== 0
      && <BottomPageNextSvg />) || (customCoordonnes[0] === 0 && customCoordonnes[1] === 0 && <BottomPageCloseSvg />) }
  </div>
);

export default connect(mapStateToProps)(CreatePoiForm);
