var isNumber = require("is_number");


module.exports = function isDecimal(obj) {
    return isNumber(obj) && obj % 1 !== 0;
};
