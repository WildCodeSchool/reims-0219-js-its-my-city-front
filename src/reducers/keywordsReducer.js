const initialState = {
  filteredPoiByKeyword: [], // Searchbar
  userInputSearchBar: '', // Searchbar
  secondKeyword: '', // Filter
  specificSecondKeywords: [], // Filter
  keywordOneChoosen: '', // Filter
  selectedCategoryKeywordTwoName: '', // Filter
};

const keywordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_SEARCHBAR_INPUT':
      if (action.filteredPoiByKeyword) {
        return {
          ...state,
          userInputSearchBar: action.userInputSearchBar,
          filteredPoiByKeyword: action.filteredPoiByKeyword,
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
      };
    case 'SAVE_NEW_POI_COORDINATES':
      return {
        ...state,
        filteredPoiByKeyword: action.filteredPoiByKeyword,
      };
    case 'HANDLE_KEYWORD_FILTERING':
      return {
        ...state,
        filteredPoiByKeyword: action.filteredPoiByKeyword,
        userInputSearchBar: action.userInputSearchBar,
      };
    case 'SHOW_SECOND_IMPORTANCE_KEYWORDS':
      return {
        ...state,
        specificSecondKeywords: action.specificSecondKeywords,
        keywordOneChoosen: action.keywordOneChoosen,
      };
    case 'APPLY_BUTTON':
      return {
        ...state,
        secondKeyword: action.secondKeyword,
      };
    default:
      return state;
  }
};

export default keywordsReducer;
