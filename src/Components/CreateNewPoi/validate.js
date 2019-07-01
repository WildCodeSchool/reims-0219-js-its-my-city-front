const InputFieldChecked = (values) => {
  const errors = {};
  if (!values.categoryKeyword) {
    errors.categoryKeyword = 'Veuillez choisir une catégorie';
  }
  if (!values.poiDesc) {
    errors.poiDesc = 'Veuillez entrer un nom ou une description';
  }
  return errors;
};

export default InputFieldChecked;
