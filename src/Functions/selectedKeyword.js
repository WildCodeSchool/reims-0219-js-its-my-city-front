import axios from 'axios';

const selectedKeyword = (
  secondKeyword,
  dispatch,
) => {
  axios.get(`${process.env.REACT_APP_API_URL}/pois/filter/${secondKeyword}`)
    .then(res => dispatch({
      type: 'HANDLE_KEYWORD_FILTERING',
      filteredPoiByKeyword: res.data,
      userInputSearchBar: secondKeyword,
    })).then(setTimeout(() => {
      dispatch({ type: 'HIDE_ALERT' });
    }, 3000));
};

export default selectedKeyword;
