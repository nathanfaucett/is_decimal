var isNumber = require("is_number");


module.exports = isDecimal;


function isDecimal(obj) {
    return isNumber(obj) && obj % 1 !== 0;
}
