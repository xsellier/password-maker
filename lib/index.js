"use strict";

var _ = require("lodash");

var ASCII_TABLE = {
  "lowercase" : {
    "start": 97,
    "end"  : 122
  },
  "uppercase" : {
    "start": 65,
    "end"  : 90
  },
  "number" : {
    "start": 48,
    "end"  : 57
  },
  "symbol" : {
    "start": 33,
    "end"  : 47
  }
};

var generateNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  generatePassword: function(pOptions, pLength) {
    var options = {
      "uppercase" : true,
      "symbols"   : true,
      "numbers"   : true
    };
    var length  = 10;

    if (_.isObject(pOptions)) {
      options = _.merge(options, pOptions);
    } else {
      pLength = pOptions;
    }

    if (_.isNumber(pLength)) {
      length = Math.floor(pLength);
    }

    // Generated password
    var output    = [];

    // List of available indexes that could be used
    var available = [];

    // Count number of reserved char to fill the requirement
    var reservedChars = 1 + ((options.uppercase || 0 ) && 1) +
                            ((options.symbols   || 0 ) && 1) +
                            ((options.numbers   || 0 ) && 1);

    for(var index = 0; index < length; ++index) {
      output.push(String.fromCharCode(generateNumber(ASCII_TABLE.lowercase.start, ASCII_TABLE.lowercase.end)));
      available.push(index);
    }

    var fillRequirement = function(asciiType) {
      var numberOfType = generateNumber(1, (length - reservedChars));

      for (index = 0; index < numberOfType; ++index) {
        var max         = available.length - 1;
        var chr         = String.fromCharCode(generateNumber(asciiType.start, asciiType.end));
        var randomIndex = generateNumber(0, max);
        var chrIndex    = available[randomIndex];

        output[chrIndex] = chr;
        available[randomIndex] = available[max];
        available.length = max;
      }

      length -= numberOfType;
      reservedChars--;
    };

    if (options.uppercase) {
      fillRequirement(ASCII_TABLE.uppercase);
    }

    if (options.symbols) {
      fillRequirement(ASCII_TABLE.symbol);
    }

    if (options.numbers) {
      fillRequirement(ASCII_TABLE.number);
    }

    return output.join('');
  }
};
