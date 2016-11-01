require('ts-node/register');

exports.config = {
  chromeOnly: true,
  directConnect: true,
  baseUrl: 'https://angular.io/',
  specs: ['test/protractor/**/*.spec.ts', 'test/protractor/*.spec.ts']
};