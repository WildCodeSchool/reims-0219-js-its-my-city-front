import axios from 'axios';

const newPoiSubmit = (
  dispatch,
  createPoiFormInfos,
  customCoordonnes,
  accessibilityRating,
  conditionRating,
  operationRating,
) => {
  axios.post(`${process.env.REACT_APP_API_URL}/pois`, {
    name: createPoiFormInfos.poiCreation.values.poiDesc,
    latitude: customCoordonnes[0],
    longitude: customCoordonnes[1],
    keyword: createPoiFormInfos.poiCreation.values.categoryKeyword,
    author_id: 1,
    global_grade: 4,
    accessibility: accessibilityRating,
    condition: conditionRating,
    functional: operationRating,
  })
    .then(res => dispatch({ type: 'SAVE_NEW_POI_COORDINATES', filteredPoiByKeyword: res.data, newPoiCoordinates: res.data[0].localisation }));
};

export default newPoiSubmit;
