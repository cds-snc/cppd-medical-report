const isValidDate = dateString => {
  return !isNaN(Date.parse(dateString));
}

const validateStringFormat = (pattern, string) => {
  var check = new RegExp(pattern);
  var res = check.test(string);

  return res;
}

const validateTelephoneFormat = string => {
    // validates format: XXX-XXX-XXXX
    const format = /^(\+0?1\s)?\(?\d{3}\)?[-]\d{3}[-]\d{4}$/
    return validateStringFormat(format, string)
}

const validateDateFormat = string => {
    // validates format: YYYY-MM-DD
    const format = /(\d{4})-(\d{2})-(\d{2})/
    return validateStringFormat(format, string)
}

const validateSINFormat = string => {
    // validates format: ### ### ###
    const format = /^(\d{3} \d{3} \d{3})$/
    return validateStringFormat(format, string);
}

const validateSIN = string => {
    // Validates using Luhn Algorithm
	if (/[^0-9\s]+/.test(string)) return false;

	let nCheck = 0, bEven = false;
	string = string.replace(/\D/g, "");

	for (var n = string.length - 1; n >= 0; n--) {
		var cDigit = string.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}

module.exports = {
  isValidDate,
  validateStringFormat,
  validateTelephoneFormat,
  validateDateFormat,
  validateSINFormat,
  validateSIN,
}