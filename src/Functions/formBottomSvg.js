import React from 'react';
import BottomPageCheckSvg from '../Components/ComponentPins/BottomPageCheckSvg';
import BottomPageNextSvg from '../Components/ComponentPins/BottomPageNextSvg';
import BottomPageCloseSvg from '../Components/ComponentPins/BottomPageCloseSvg';

const formBottomSvg = (isPageCompleted, pageNumber, form) => {
  if (Object.keys(form).length === 0 || form.poiCreation.values === undefined) {
    if (pageNumber === 5) {
      return <BottomPageCheckSvg />;
    }
    if (isPageCompleted) {
      return <BottomPageNextSvg />;
    }
    return <BottomPageCloseSvg />;
  }
  if (pageNumber === 5) {
    return <BottomPageCheckSvg />;
  }
  if (isPageCompleted || form.poiCreation.values.categoryKeyword) {
    return <BottomPageNextSvg />;
  }
  return <BottomPageCloseSvg />;
};

export default formBottomSvg;
