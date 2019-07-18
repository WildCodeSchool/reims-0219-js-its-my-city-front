const initialState = {
  file: [], // Form
  previewPic: '', // Form
  conditionRating: 1, // Form
  operationRating: 1, // Form
  accessibilityRating: 1, // Form
  newPoiCoordinates: [], // Form
  selectedCategoryKeywordTwoName: '', // Form
};

const poisReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INSERT_PICTURE':
      return {
        ...state,
        file: action.file,
        previewPic: action.previewPic,
      };
    default:
      return state;
  }
};

export default poisReducer;
