var passwordMaker = require("../lib/index")
  , chai          = require('chai')
  , should        = chai.should()
  , expect        = chai.expect;

describe("The password-maker", function() {
  it("should generate a password of length 50", function(done) {
    var result = passwordMaker.generatePassword({}, 50);
    expect(result.length).to.equal(50);
    done();
  });

  it("should generate a password with only lower cases", function(done) {
    var options = {
      uppercase: false,
      symbols  : false,
      numbers  : false
    };

    var result = passwordMaker.generatePassword(options);
    expect(result).to.match(/^[a-z]+$/);
    done();
  });

  it("should generate a password with lower and upper cases", function(done) {
    var options = {
      uppercase: true,
      symbols  : false,
      numbers  : false
    };

    var result = passwordMaker.generatePassword(options);
    expect(result).to.match(/[A-Z]/);
    done();
  });

  it("should generate a password with lower cases and symbols", function(done) {
    var options = {
      uppercase: false,
      symbols  : true,
      numbers  : false
    };

    var result = passwordMaker.generatePassword(options);
    expect(result).to.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/);
    done();
  });

  it("should generate a password with lower cases and numbers", function(done) {
    var options = {
      uppercase: false,
      symbols  : false,
      numbers  : true
    };

    var result = passwordMaker.generatePassword(options);
    expect(result).to.match(/[0-9]/);
    done();
  });

  it("should generate a password with lower, upper cases, symbols and numbers", function(done) {
    var options = {
      uppercase: true,
      symbols  : true,
      numbers  : true
    };

    var result = passwordMaker.generatePassword(options);
    expect(result).to.match(/[A-Z]/);
    expect(result).to.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/);
    expect(result).to.match(/[0-9]/);
    done();
  });
});
