const initialState = {
  zoom: 16,
  geolocCoordonnees: [],
  defaultCoordonnees: [49.260096, 4.030293],
  customCoordonnes: [0, 0],
  poiSampleDisplay: [],
  specificPoiInfos: [],
  filterKeywordPageDisplay: false, // displays the page that allows to filter the keywords
  isCreateFormDisplayed: false,
  InformationPoiInfos: false,
  filteredPoiByKeyword: [],
  poiKeywordsDisplay: [],
  userInputSearchBar: '',
  isFirstResearchDone: false,
  name: '',
  keywordTwo: '',
  isKeywordOneChoosen: false,
  isKeywordTwoChoosen: false,
  specificSecondKeywords: [],
  firstIndicationIsDisplayed: true,
  secondIndicationIsdisplayed: false,
  secondKeyword: '',
  formPage: 1,
  barsAreDisplayed: true,
  file: [],
  conditionRating: 1,
  operationRating: 1,
  accessibilityRating: 1,
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
      if (state.InformationPoiInfos === true) {
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
    case 'DISPLAY_FILTER_PAGE':
      return {
        ...state,
        filterKeywordPageDisplay: !state.filterKeywordPageDisplay,
        barsAreDisplayed: !state.barsAreDisplayed,
      };
    case 'TRANSITION_POI_INFOS':
      return {
        ...state,
        InformationPoiInfos: action.InformationPoiInfos,
      };
    case 'HANDLE_KEYWORD_FILTERING':
      return {
        ...state,
        filteredPoiByKeyword: action.filteredPoiByKeyword,
        filterKeywordPageDisplay: false,
        isCreateFormDisplayed: false,
        barsAreDisplayed: !state.barsAreDisplayed,
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
    case 'SHOW_SECOND_IMPORTANCE_KEYWORD':
      return {
        ...state,
        isKeywordOneChoosen: true,
        specificSecondKeywords: action.specificSecondKeywords,
        firstIndicationIsDisplayed: false,
        secondIndicationIsDisplayed: true,
      };
    case 'APPLY_BUTTON':
      return {
        ...state,
        isKeywordTwoChoosen: true,
        secondKeyword: action.secondKeyword,
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
      };
    case 'NEXT_PAGE':
      return {
        ...state,
        formPage: action.page,
      };
    case 'PREVIOUS_PAGE':
      return {
        ...state,
        formPage: action.page,
      };
    case 'ADD_CUSTOM_MARKER':
      return {
        ...state,
        customCoordonnes: action.customCoordonnes,
      };
    case 'HIDE_ALERT':
      return {
        ...state,
        isFirstResearchDone: false,
      };
    default:
      return state;
  }
};

export default poisReducer;
