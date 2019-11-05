const validateDateFormat = string => {
    // validates format: YYYY-MM-DD
    return /^(\d{4})-(\d{2})-(\d{2})$/.test(string)
}

const daysInMonth = function (m, y) {
    // m is 0-indexed, so february = 1
    switch (m) {
        case 1 :
            return (y % 4 === 0 && y % 100) || y % 400 === 0 ? 29 : 28;
        case 8 : case 3 : case 5 : case 10 :
            return 30;
        default :
            return 31
    }
};

const isValidDate = function (dateString) {
    // expects YYYY-MM-DD
    if (!/^(\d{4})-(\d{2})-(\d{2})$/.test(dateString)) return false;

    const parts = dateString.split('-');
    const y = parts[0]
    let m = parts[1]
    const d = parts[2]

    m = parseInt(m, 10) - 1;
    return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
};

const validateTelephoneFormat = string => {
    // validates format: XXX-XXX-XXXX
    return /^(\+0?1\s)?\(?\d{3}\)?[-]\d{3}[-]\d{4}$/.test(string)
}

const validateSINFormat = string => {
    // validates format: ### ### ### or #########
    return /^(\d{3} ?\d{3} ?\d{3})$/.test(string)
}

const validateSIN = string => {
	if (/[^0-9\s]+/.test(string)) return false;

    // Validates using Luhn Algorithm
	let nCheck = 0
    let bEven = false
	string = string.replace(/\D/g, "")

	for (var n = string.length - 1; n >= 0; n--) {
        var cDigit = string.charAt(n)
        var nDigit = parseInt(cDigit, 10)

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) === 0;
}

module.exports = {
  isValidDate,
  validateTelephoneFormat,
  validateDateFormat,
  validateSINFormat,
  validateSIN,
  daysInMonth,
}