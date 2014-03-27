exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '../test/e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000',
    seleniumPort: 4444,

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
