const initialState = {
  file: [],
  previewPic: '',
  conditionRating: 1,
  operationRating: 1,
  accessibilityRating: 1,
  newPoiCoordinates: [],
  selectedCategoryKeywordTwoName: '',
};

const dataFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INSERT_PICTURE':
      return {
        ...state,
        file: action.file,
        previewPic: action.previewPic,
      };
    case 'RATING_CONDITION_CHANGE':
      return {
        ...state,
        conditionRating: action.rating,
      };
    case 'RATING_OPERATION_CHANGE':
      return {
        ...state,
        operationRating: action.rating,
      };
    case 'RATING_ACCESSIBILITY_CHANGE':
      return {
        ...state,
        accessibilityRating: action.rating,
      };
    case 'SAVE_KEYWORD_NAME':
      return {
        ...state,
        selectedCategoryKeywordTwoName: action.selectedCategoryKeywordTwoName,
      };
    case 'SAVE_NEW_POI_COORDINATES':
      return {
        ...state,
        conditionRating: 1,
        operationRating: 1,
        accessibilityRating: 1,
        newPoiCoordinates: action.newPoiCoordinates,
        previewPic: '',
      };
    default:
      return state;
  }
};

export default dataFormReducer;
