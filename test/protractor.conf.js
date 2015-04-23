/**
 * Created by yanning on 18/04/2015.
 */
'use strict';
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar:'node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.45.0.jar',
  specs: ['e2e/**/*.js'],
  baseUrl: 'http://localhost:9001' //default test port with Yeoman
};
