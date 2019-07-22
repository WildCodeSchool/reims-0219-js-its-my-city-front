const initialState = {
  poiSampleDisplay: [],
  specificPoiInfos: [],
  poiKeywordsDisplay: [],
};

const poisReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default poisReducer;
