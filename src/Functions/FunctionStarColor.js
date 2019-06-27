const starColor = (rating) => {
  switch (rating) {
    case 'Check':
      return 'st0_1';
    case 'Uncheck':
      return 'st0_2';
    default: return 'st0';
  }
};

export default starColor;
