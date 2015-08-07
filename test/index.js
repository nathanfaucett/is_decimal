var tape = require("tape"),
    isDecimal = require("..");


tape("isDecimal(value) should return true when the value is a decimal", function(assert) {
    assert.equal(isDecimal(null), false);
    assert.equal(isDecimal(12345), false);
    assert.equal(isDecimal(0.12345), true);
    assert.end();
});
