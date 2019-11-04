const isValidDate = dateString => {
  return !isNaN(Date.parse(dateString));
}

const validateStringFormat = (pattern, string) => {
  var check = new RegExp(pattern);
  var res = check.test(string);

  return res;
}

module.exports = {
  isValidDate,
  validateStringFormat
}