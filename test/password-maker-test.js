var passwordMaker = require("../lib/index")
  , chai          = require('chai')
  , should        = chai.should()
  , expect        = chai.expect;

describe("The password-maker", function() {
  it("should generate a password", function(done) {
    expect(passwordMaker.generatePassword()).to.exist;
    done();
  });
});