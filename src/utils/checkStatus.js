const checkStatus = (value) => {
  const enumValue = ["ACTIVE", "COMPLETED"];
  if (enumValue.includes(value.toUpperCase())) {
    return true;
  }
  return false;
};

export default checkStatus;
