const pickColor = (keyword) => {
  switch (keyword) {
    case 'Nature':
      return 'st0_1';
    case 'Sport':
      return 'st0_2';
    default: return 'st0';
  }
};

export default pickColor;
