const initialState = {
  zoom: 16,
  geolocCoordonnees: [],
  defaultCoordonnees: [49.260096, 4.030293],
  poiSampleDisplay: [],
  specificPoiInfos: [],
  searchBarValueInput: '',
  filteredPoiByKeyword: [],
  InformationPoiInfos: true,
  poiKeywordsDisplay: [],
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
    case 'CLOSE_POI_INFOS':
      return {
        ...state,
        specificPoiInfos: action.specificPoiInfos,
      };
    case 'HANDLE_SEARCHBAR_INPUT':
      return {
        ...state,
        searchBarValueInput: action.searchBarValueInput,
      };
    case 'HANDLE_SUBMIT_SEARCHBAR':
      return {
        ...state,
        filteredPoiByKeyword: action.filteredPoiByKeyword,
        poiSampleDisplay: action.poiSampleDisplay,
      };
    default:
      return state;
  }
};

export default poisReducer;
