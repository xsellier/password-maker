password-maker
==============

Generate a password randomly (optimized).

## Usage
password-maker can be used like described below:

``` js
  var passwordMaker = require("password0maker");

  var options = {
    uppercase: false,
    symbols  : false,
    numbers  : true
  };

  var password = passwordMaker.generatePassword(options, 32);
```

## Installation

### Installing password-maker
```
  npm install password-maker --save
```

## Run Tests
Tests are written with mocha/chai.

``` bash
  $ npm test
```

## Changelog
0.1.1

- Final release

0.1.0

- First release, everything was hard-coded
