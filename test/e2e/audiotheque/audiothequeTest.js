/**
 * Created by yanning on 18/04/2015.
 */
'use strict';
var message;
beforeEach(function () {
  browser.get('http://localhost:9001/#/audiotheque');
  message=element(by.css('message'));
});
describe("audiotheque page",function(){
 it('should have audiotheque in route',function(){
   expect(browser.getCurrentUrl()).toContain('#/audiotheque');
});
});
