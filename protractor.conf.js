require('ts-node/register');

exports.config = {
  baseUrl: 'https://angular.io/',
  specs: ['test/protractor/**/*.spec.ts', 'test/protractor/*.spec.ts']
};