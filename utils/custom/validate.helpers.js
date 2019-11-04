const isValidDate = dateString => {
  return !isNaN(Date.parse(dateString));
}

const validateStringFormat = (pattern, string) => {
  var check = new RegExp(pattern);
  var res = check.test(string);

  return res;
}

const isValidTelephone = string => {
    // validates format: XXX-XXX-XXXX
    const format = /^(\+0?1\s)?\(?\d{3}\)?[-]\d{3}[-]\d{4}$/
    return validateStringFormat(format, string)
}

const validateDateFormat = string => {
    // validates format: YYYY-MM-DD
    const format = /(\d{4})-(\d{2})-(\d{2})/
    return validateStringFormat(format, string)
}

module.exports = {
  isValidDate,
  validateStringFormat,
  isValidTelephone,
  validateDateFormat
}