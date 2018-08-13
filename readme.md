# Dev Katas

Code katas for learning and practicing Test-Driven Development (TDD)

## Contents

 * [Kata instructions](./help)
   * [Fizz Buzz Instructions](./help/1-fizz-buzz.txt)
   * [String Calculator Instructions](./help/2-string-calc.txt)
   * [Data Munging Instructions](./help/3-data-munge.txt)


 * [Kata Code](./js)
   * [Example Code](./js/clue-module.js)
   * [Fizz Buzz Code](./js/1-fizz-buzz/fizz-buzz.js)
   * [String Calculator Code](./js/2-string-calc/string-calc.js)
   * [Data Munging Code](./js/3-data-munge/data-munge.js)


 * [Kata Tests](./test)
   * [Example Tests](./test/clue-module.test.js)
   * [Fizz Buzz Tests](./test/fizz-buzz.test.js)
   * [String Calculator Tests](./test/string-calc.test.js)
   * [Data Munging Tests](./test/data-munge.test.js)


### Prerequisites

These katas use [Jasmine](https://jasmine.github.io/), a behavior-driven development framework for testing JavaScript code, as well as [Karma](https://karma-runner.github.io/2.0/index.html), a test-runner for JavaScript.

Karma runs on [Node.js](http://nodejs.org/) and is available as an [Node Package Manager](https://npmjs.org/package/karma) (npm) package.

The default browser is Chrome -- you may edit the [Karma configuration](./karma.comf.js) to change this. See the [Browsers](https://karma-runner.github.io/2.0/config/browsers.html) section for more information.


### Installing

Node.js on Mac or Linux can be installed through [Node Version Manager](https://github.com/creationix/nvm) (NVM). On Windows, download Node.js from [the official site](https://nodejs.org/) or use the [NVM PowerShell Module](https://www.powershellgallery.com/packages/nvm).

Once Node.js and NPM are installed, install the `karma-cli` package globally, so that karma can be run more easily from the command line:

```
$ npm install -g karma-cli
```

Navigate to the root level of this repository and install the required npm packages:

```
npm install
```

## Running the tests

To execute the example tests, enter the `karma start` command.