var assert = require("assert"),
    isDecimal = require("../src/index");


describe("isDecimal", function() {
    it("should return true when the value is a decimal", function() {
        assert.equal(isDecimal(null), false);
        assert.equal(isDecimal(12345), false);
        assert.equal(isDecimal(0.12345), true);
    });
});
