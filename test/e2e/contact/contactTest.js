/**
 * Created by yanning on 18/04/2015.
 */
'use strict';
var message;
beforeEach(function () {
  browser.get('http://localhost:9001/#/contact');
  message=element(by.css('message'));
});
describe("contact page",function(){
 it('should have contact in route',function(){
   expect(browser.getCurrentUrl()).toContain('#/contact');
});
});
