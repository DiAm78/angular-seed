# angular-seed with Angular Material Design

This is angular seed project adapted from another repository [AngularJS](http://angularjs.org/) and structured for a startup project with material design features.


The project is setup with all required components to have turn-key base project

## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).


### Install Dependencies

Run npm and bower to get all dependencies

```
sudo npm install

bower install
```

You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files


### Run the Application

You can download the zip and save in a folder
You can use any local webserver to test the application

```
on mac just use python -m SimpleHTTPServer 8000
```

Now browse to the app at `http://localhost:8000`.



## Directory Layout

```
app/                    --> all of the source files for the application
  assets/               --> contains folders for all components like css, svg, images etc.
        app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  controllers/          --> All view controllers
  views/                --> All views
  directives            --> All app directives
  services              --> All app services
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)

karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing


## Contact

Connect on my blog
[ExuberantIndia](http://exuberantIndia.com)



