var isNumber = require("is_number");


module.exports = isDecimal;


function isDecimal(value) {
    return isNumber(value) && value % 1 !== 0;
}
