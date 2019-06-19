const initialState = {
  zoom: 16,
  geolocCoordonnees: [],
  defaultCoordonnees: [49.260096, 4.030293],
  poiSampleDisplay: [],
  specificPoiInfos: [],
  InformationPoiInfos: false,
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
    case 'SHOW_POI_INFOS':
      return {
        ...state,
        specificPoiInfos: action.specificPoiInfos,
      };
    case 'CLOSE_POI_INFOS':
      if (state.InformationPoiInfos === true) {
        return {
          ...state,
          specificPoiInfos: action.specificPoiInfos,
          InformationPoiInfos: true,
        };
      }
      return {
        ...state,
        specificPoiInfos: action.specificPoiInfos,
      };

    case 'TRANSITION_POI_INFOS':
      return {
        ...state,
        InformationPoiInfos: action.InformationPoiInfos,
      };
    default:
      return state;
  }
};

export default poisReducer;
