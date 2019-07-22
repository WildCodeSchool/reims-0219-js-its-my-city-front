const initialState = {
  isCreateFormDisplayed: false,
  isPageCompleted: false,
  filterKeywordPageDisplay: false,
  InformationPoiInfos: false,
  isFirstResearchDone: false,
  canClickOnStars: true,
  areOthersRatingDisplayed: false,
  barsAreDisplayed: true,
  isKeywordTwoChoosen: false,
  formPage: 1,
  filterPage: 1,
};

const dataFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_POI_CREATION_FORM':
      return {
        ...state,
        isCreateFormDisplayed: !state.isCreateFormDisplayed,
        barsAreDisplayed: !state.barsAreDisplayed,
      };
    case 'NEXT_PAGE':
      return {
        ...state,
        formPage: state.formPage + 1,
        isPageCompleted: false,
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
    case 'SHOW_SECOND_IMPORTANCE_KEYWORDS':
      return {
        ...state,
        iskeywordOneChoosen: !action.iskeywordOneChoosen,
        filterPage: state.filterPage + 1,
      };
    case 'HIDE_ALERT':
      return {
        ...state,
        isFirstResearchDone: false,
      };
    case 'SAVE_NEW_POI_COORDINATES':
      return {
        ...state,
        filterKeywordPageDisplay: false,
        isCreateFormDisplayed: false,
        barsAreDisplayed: true,
        formPage: 1,
      };
    case 'DISPLAY_FILTER_PAGE':
      return {
        ...state,
        filterKeywordPageDisplay: !action.filterKeywordPageDisplay,
        barsAreDisplayed: !state.barsAreDisplayed,
      };
    case 'CLOSE_PAGE':
      if (state.filterKeywordPageDisplay) {
        return {
          ...state,
          filterKeywordPageDisplay: state.filterKeywordPageDisplay === false,
          barsAreDisplayed: !state.barsAreDisplayed,
          isKeywordTwoChoosen: '',
          filterPage: 1,
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
    case 'SHOW_ALL_RATINGS':
      return {
        ...state,
        areOthersRatingDisplayed: !state.areOthersRatingDisplayed,
      };
    case 'HANDLE_KEYWORD_FILTERING':
      return {
        ...state,
        isFirstResearchDone: true,
        filterKeywordPageDisplay: !state.filterKeywordPageDisplay,
        barsAreDisplayed: !state.barsAreDisplayed,
      };
    case 'CLOSE_POI_INFOS':
      if (state.InformationPoiInfos) {
        return {
          ...state,
          InformationPoiInfos: false,
        };
      }
      return {
        ...state,
      };
    case 'HANDLE_SELECT':
      return {
        ...state,
        isFirstResearchDone: true,
      };
    case 'HANDLE_SEARCHBAR_INPUT':
      if (action.filteredPoiByKeyword) {
        return {
          ...state,
          isFirstResearchDone: false,
        };
      }
      return {
        ...state,
      };
    case 'APPLY_BUTTON':
      return {
        ...state,
        isKeywordTwoChoosen: !action.isKeywordTwoChoosen,
      };
    case 'TRANSITION_POI_INFOS':
      return {
        ...state,
        InformationPoiInfos: !state.InformationPoiInfos,
      };
    case 'ADD_CUSTOM_MARKER':
      return {
        ...state,
        isPageCompleted: true,
      };
    default:
      return state;
  }
};

export default dataFormReducer;
