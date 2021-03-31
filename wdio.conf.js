const path = require('path');

exports.config = {

    // ==================
    // Specify Test Files
    // ==================

    specs: [
        './src/features/**/*.feature',
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities
    // at the same time. Depending on the number of capabilities, WebdriverIO
    // launches several test sessions. Within your capabilities you can
    // overwrite the spec and exclude options in order to group specific specs
    // to a specific capability.
 
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check
    // out the Sauce Labs platform configurator - a great tool to configure your
    // capabilities: https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an
        // in-house Selenium grid with only 5 firefox instance available you can
        // make sure that not more than 5 instance gets started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: silent | verbose | command | data | result |
    // error
    logLevel: 'trace',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten getUrl command calls. If your getUrl
    // parameter starts with "/", then the base getUrl gets prepended.
    baseUrl: 'http://automationpractice.com',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,


    services: ['selenium-standalone'],
    outputDir: path.join(__dirname, 'logs'),

    framework: 'cucumber',

    reporters: ['spec'],

    //
    // If you are using Cucumber you need to specify the location of your step
    // definitions.
    cucumberOpts: {
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> module used for processing required features
        requireModule: ['@babel/register'],
        // <boolean< Treat ambiguous definitions as errors
        failAmbiguousDefinitions: true,
        // <boolean> invoke formatters without executing steps
        // dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> Enable this config to treat undefined definitions as
        // warnings
        ignoreUndefinedDefinitions: false,
        // <string[]> ("extension:module") require files with the given
        // EXTENSION after requiring MODULE (repeatable)
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <string[]> (file/dir) require files before executing features
        require: [
            './src/steps/given.js',
            './src/steps/then.js',
            './src/steps/when.js',
            // Or search a (sub)folder for JS files with a wildcard
            // works since version 1.1 of the wdio-cucumber-framework
            // './src/**/*.js',
        ],
        // <string> specify a custom snippet syntax
        snippetSyntax: undefined,
        // <boolean> fail if there are any undefined or pending steps
        strict: true,

        tagExpression: 'not @Pending',
        // <boolean> add cucumber tags to feature or scenario name
        tagsInTitle: false,
        // <number> timeout for step definitions
        timeout: 35000,
    },


    // =====
    // Hooks
    // =====

    before: function before() {
        /**
         * Setup the Chai assertion framework
         */
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },

};
