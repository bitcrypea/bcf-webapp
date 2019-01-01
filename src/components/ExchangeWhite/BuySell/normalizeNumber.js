const normalizePhone = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

  return onlyNums;
};

export default normalizePhone;
