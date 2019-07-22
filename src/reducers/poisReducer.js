const initialState = {
  zoom: 16,
  geolocCoordonnees: [],
  defaultCoordonnees: [49.260096, 4.030293],
  customCoordonnes: [0, 0],
  poiSampleDisplay: [],
  specificPoiInfos: [],
  isCreateFormDisplayed: false,
  filterKeywordPageDisplay: false,
  InformationPoiInfos: false,
  filteredPoiByKeyword: [],
  poiKeywordsDisplay: [],
  userInputSearchBar: '',
  isFirstResearchDone: false,
  secondKeyword: '',
  name: '',
  keywordTwo: '',
  specificSecondKeywords: [],
  formPage: 1,
  file: [],
  previewPic: '',
  conditionRating: 1,
  operationRating: 1,
  accessibilityRating: 1,
  newPoiCoordinates: [],
  keywordOneChoosen: '',
  canClickOnStars: true,
  selectedCategoryKeywordTwoName: '',
  areOthersRatingDisplayed: false,
  barsAreDisplayed: true,
  filterPage: 1,
  isKeywordTwoChoosen: false,
  isUserPageDisplayed: false,
};

const poisReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CURRENT_POSITION':
      return {
        ...state,
        geolocCoordonnees: action.geolocCoordonnees,
      };
    case 'GET_POIS_SAMPLE':
      return {
        ...state,
        poiSampleDisplay: action.poiSampleDisplay,
      };
    case 'GET_POIS_KEYWORDS':
      return {
        ...state,
        poiKeywordsDisplay: action.poiKeywordsDisplay,
      };
    case 'SHOW_POI_INFOS':
      return {
        ...state,
        specificPoiInfos: action.specificPoiInfos,
      };
    case 'TOGGLE_POI_CREATION_FORM':
      return {
        ...state,
        isCreateFormDisplayed: !state.isCreateFormDisplayed,
        barsAreDisplayed: !state.barsAreDisplayed,
      };

    case 'CLOSE_POI_INFOS':
      if (state.InformationPoiInfos) {
        return {
          ...state,
          specificPoiInfos: action.specificPoiInfos,
          InformationPoiInfos: false,
        };
      }
      return {
        ...state,
        specificPoiInfos: action.specificPoiInfos,
      };
    case 'TRANSITION_POI_INFOS':
      return {
        ...state,
        InformationPoiInfos: !state.InformationPoiInfos,
      };
    case 'HANDLE_SEARCHBAR_INPUT':
      if (action.filteredPoiByKeyword) {
        return {
          ...state,
          userInputSearchBar: action.userInputSearchBar,
          filteredPoiByKeyword: action.filteredPoiByKeyword,
          isFirstResearchDone: false,
        };
      }
      return {
        ...state,
        userInputSearchBar: action.userInputSearchBar,
      };
    case 'HANDLE_SELECT':
      return {
        ...state,
        userInputSearchBar: action.userInputSearchBar,
        filteredPoiByKeyword: action.filteredPoiByKeyword,
        isFirstResearchDone: true,
      };
    case 'HANDLE_FORM_NAME_CHANGE':
      return {
        ...state,
        name: action.name,
      };
    case 'HANDLE_FORM_K2_CHANGE':
      return {
        ...state,
        keywordTwo: action.keywordTwo,
        keywordOneId: action.keywordOneId,
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
    case 'INSERT_PICTURE':
      return {
        ...state,
        file: action.file,
        previewPic: action.previewPic,
      };
    case 'NEXT_PAGE':
      return {
        ...state,
        formPage: state.formPage + 1,
      };
    case 'PREVIOUS_PAGE':
      if (state.isCreateFormDisplayed) {
        return {
          ...state,
          formPage: state.formPage - 1,
        };
      } if (state.filterKeywordPageDisplay) {
        return {
          ...state,
          filterPage: state.filterPage - 1,
        };
      }
      break;
    case 'ADD_CUSTOM_MARKER':
      return {
        ...state,
        customCoordonnes: action.customCoordonnes,
      };
    case 'SAVE_NEW_POI_COORDINATES':
      return {
        ...state,
        filteredPoiByKeyword: action.filteredPoiByKeyword,
        filterKeywordPageDisplay: false,
        isCreateFormDisplayed: false,
        barsAreDisplayed: true,
        formPage: 1,
        conditionRating: 1,
        operationRating: 1,
        accessibilityRating: 1,
        newPoiCoordinates: action.newPoiCoordinates,
      };
    case 'SAVE_KEYWORD_NAME':
      return {
        ...state,
        selectedCategoryKeywordTwoName: action.selectedCategoryKeywordTwoName,
      };
    case 'HIDE_ALERT':
      return {
        ...state,
        isFirstResearchDone: false,
      };
    case 'SHOW_ALL_RATINGS':
      return {
        ...state,
        areOthersRatingDisplayed: !state.areOthersRatingDisplayed,
      };

    case 'DISPLAY_FILTER_PAGE':
      return {
        ...state,
        filterKeywordPageDisplay: !action.filterKeywordPageDisplay,
        barsAreDisplayed: !state.barsAreDisplayed,
      };
    case 'DISPLAY_USER_PAGE':
      return {
        ...state,
        isUserPageDisplayed: !action.isUserPageDisplayed,
        barsAreDisplayed: !state.barsAreDisplayed,
      };
    case 'HANDLE_KEYWORD_FILTERING':
      return {
        ...state,
        filteredPoiByKeyword: action.filteredPoiByKeyword,
        filterKeywordPageDisplay: !state.filterKeywordPageDisplay,
        barsAreDisplayed: !state.barsAreDisplayed,
      };
    case 'SHOW_SECOND_IMPORTANCE_KEYWORDS':
      return {
        ...state,
        filterPage: state.filterPage + 1,
        iskeywordOneChoosen: !action.iskeywordOneChoosen,
        specificSecondKeywords: action.specificSecondKeywords,
        keywordOneChoosen: action.keywordOneChoosen,
      };
    case 'APPLY_BUTTON':
      return {
        ...state,
        isKeywordTwoChoosen: !action.isKeywordTwoChoosen,
        secondKeyword: action.secondKeyword,
      };
    case 'CLOSE_PAGE':
      if (state.filterKeywordPageDisplay) {
        return {
          ...state,
          filterKeywordPageDisplay: state.filterKeywordPageDisplay === false,
          barsAreDisplayed: !state.barsAreDisplayed,
        };
      }
      if (state.isUserPageDisplayed) {
        return {
          ...state,
          isUserPageDisplayed: state.isUserPageDisplayed === false,
          barsAreDisplayed: !state.barsAreDisplayed,
        };
      }
      if (state.isCreateFormDisplayed) {
        return {
          ...state,
          isCreateFormDisplayed: state.isCreateFormDisplayed === false,
          barsAreDisplayed: !state.barsAreDisplayed,
        };
      }
      break;
    default:
      return state;
  }
};

export default poisReducer;
