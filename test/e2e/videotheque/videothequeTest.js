/**
 * Created by yanning on 18/04/2015.
 */
'use strict';
var message;
beforeEach(function () {
  browser.get('http://localhost:9001/#/videotheque');
  message=element(by.css('message'));
});
describe("videotheque page",function(){
 it('should have videotheque in route ',function(){
   expect(browser.getCurrentUrl()).toContain('#/videotheque');
});
});
