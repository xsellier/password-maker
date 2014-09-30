password-maker
==============

Generate a password randomly (optimized).

## Usage
password-maker can be used like described below:

``` js
  var passwordMaker = require("password-maker");

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
1.0.2

- Update README.md file

1.0.1

- Fix a bug with password index overwritten
- Add more unit test !

1.0.0

- Add password generation
- Add unit test

0.1.0

- First release, everything was hard-coded
