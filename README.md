password-maker [![Build Status](https://travis-ci.org/xsellier/password-maker.svg)](https://travis-ci.org/xsellier/password-maker)
==============

Generate a password randomly (optimized).

## Usage
password-maker can be used like described below:

``` js
  var generatePassword = require("password-maker");

  // get a 8-character random password
  var shortPassword = generatePassword(8);


  // get a 32-character password with advanced options
  var options = {
    uppercase: false,
    symbols  : false,
    numbers  : true
  };
  var longPassword = generatePassword(options, 32);
```

### What if ?

#### I declare a negative password length ?

Min password length is 4, if you set -1 or 3, length will be automatically set to 4.

#### I set a wrong option type ?

Behavior could be defined following this https://dorey.github.io/JavaScript-Equality-Table/#if-statement

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
1.1.3
- Fix issue with password requirement generation
- Add unit tests

1.1.2
- Remove lodash from dependencies
- Upgrade devDependencies
- Add a min password size

1.0.5
- Fix README.md typo

1.0.4

- Add examples in README.md
- Make function 'generatePassword' callable

1.0.3

- Fix typo in README.md

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
