//jshint strict: false
exports.config = {
  specs: ['scenarios.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub'
};
