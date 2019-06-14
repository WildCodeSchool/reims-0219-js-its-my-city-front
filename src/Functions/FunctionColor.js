const pickColor = (keyword) => {
  switch (keyword) {
    case 1:
      return 'st0_1';
    case 2:
      return 'st0_2';
    default: return 'st0';
  }
};

export default pickColor;
