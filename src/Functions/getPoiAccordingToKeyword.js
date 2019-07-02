import axios from 'axios';

const getPoiAccordingToKeyword = (keywordChoosen, dispatch, allKeywords = undefined) => {
  // If the third argument is not passed, get all poi with the keyword choosen ..
  if (allKeywords === undefined) {
    axios.get(`${process.env.REACT_APP_API_URL}/pois/filter/${keywordChoosen}`)
      .then(res => dispatch({ type: 'HANDLE_KEYWORD_FILTERING', filteredPoiByKeyword: res.data, poiSampleDisplay: [] }));
  } else {
    /* ... else filter all keywords to check if the keywordChoosen importance is one or two,
         and pick an api way accordingly as the queries behind are differents. */
    axios.get(`${process.env.REACT_APP_API_URL}/pois/${allKeywords.filter(
      keyword => keyword.importance === 1 && keyword.name === keywordChoosen,
    ).length
      ? 'filterKeyword1/'
      : 'filter/'}${keywordChoosen}`)
      .then(res => dispatch({
        type: 'HANDLE_SELECT',
        userInputSearchBar: keywordChoosen,
        filteredPoiByKeyword: res.data,
      }));
  }
};

export default getPoiAccordingToKeyword;
