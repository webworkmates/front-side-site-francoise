/**
 * Created by yanning on 18/04/2015.
 */
'use strict';
var message;
beforeEach(function () {
  browser.get('http://localhost:9001/#/agenda');
  message=element(by.css('message'));
});
describe("agenda page",function(){
 it('should have agenda in route ',function(){
   expect(browser.getCurrentUrl()).toContain('#/agenda');
});
});
