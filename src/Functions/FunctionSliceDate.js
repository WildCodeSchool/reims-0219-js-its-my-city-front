const sliceDate = (date) => {
  const slicedDate = date.slice(0, 10).replace('T', ' ').split('-');
  const newDate = `${slicedDate[2]}.${slicedDate[1]}.${slicedDate[0]}`;
  return newDate;
};

export default sliceDate;
