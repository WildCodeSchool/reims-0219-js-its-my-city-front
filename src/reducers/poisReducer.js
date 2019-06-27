const initialState = {
  zoom: 16,
  geolocCoordonnees: [],
  defaultCoordonnees: [49.260096, 4.030293],
  poiSampleDisplay: [],
  specificPoiInfos: [],
  filterKeywordPageDisplay: false, // displays the page that allows to filter the keywords
  isCreateFormDisplayed: false,
  InformationPoiInfos: false,
  filteredPoiByKeyword: [],
  poiKeywordsDisplay: [],
  userInputSearchBar: '',
  name: '',
  keywordOne: '',
  keywordOneId: '',
  keywordTwo: '',
  isKeywordOneChoosen: false,
  isKeywordTwoChoosen: false,
  specificSecondKeyword: [],
  isSelectFirstFilterSentenceDisplayed: true,
  isSelectSecondFilterSentenceDisplayed: false,
  registerSecondKeywordSelection: '',
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
        poiSampleDisplay: action.poiSampleDisplay,
      };
    case 'HANDLE_SEARCHBAR_INPUT':
      return {
        ...state,
        userInputSearchBar: action.userInputSearchBar,
      };
    case 'HANDLE_SELECT':
      return {
        ...state,
        userInputSearchBar: action.userInputSearchBar,
        filteredPoiByKeyword: action.filteredPoiByKeyword,
      };
    case 'HANDLE_FORM_NAME_CHANGE':
      return {
        ...state,
        name: action.name,
      };
    case 'HANDLE_FORM_K1_CHANGE':
      return {
        ...state,
        keywordOne: action.keywordOne,
        keywordOneId: action.keywordOneId,
      };
    case 'HANDLE_FORM_K2_CHANGE':
      return {
        ...state,
        keywordTwo: action.keywordTwo,
      };
    case 'CLOSE_FILTER_COMPONENT':
      return {
        ...state,
        filterKeywordPageDisplay: false,
      };
    case 'SHOW_SECOND_IMPORTANCE_KEYWORD':
      return {
        ...state,
        isKeywordOneChoosen: true,
        specificSecondKeyword: action.specificSecondKeyword,
        isSelectFirstFilterSentenceDisplayed: false,
        isSelectSecondFilterSentenceDisplayed: true,
      };
    case 'APPLY_BUTTON':
      return {
        ...state,
        isKeywordTwoChoosen: true,
        registerSecondKeywordSelection: action.registerSecondKeywordSelection,
      };
    default:
      return state;
  }
};

export default poisReducer;
