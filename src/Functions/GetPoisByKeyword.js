import axios from 'axios';

// Filter all keywords to check if the keyword is importance one or two, and pick a api way accordingly

const getPoisByKeyword = (allKeywords, userInput, dispatch) => {
  axios.get(`${process.env.REACT_APP_API_URL}/pois/${allKeywords.filter(
    keyword => keyword.importance === 1 && keyword.name === userInput,
  ).length
    ? 'filterKeyword1/'
    : 'filter/'}${userInput}`)
    .then(res => dispatch({ type: 'HANDLE_SELECT', userInputSearchBar: userInput, filteredPoiByKeyword: res.data }));
};

export default getPoisByKeyword;
