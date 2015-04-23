/**
 * Created by yanning on 18/04/2015.
 */
'use strict';
var message;
beforeEach(function () {
  browser.get('http://localhost:9001/#/phototheque');
  message=element(by.css('message'));
});
describe("phototheque page",function(){
 it('should have ',function(){
   expect(browser.getCurrentUrl()).toContain('#/phototheque');
});
});
