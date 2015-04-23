/**
 * Created by yanning on 18/04/2015.
 */
'use strict';
var message;
beforeEach(function () {
  browser.get('http://localhost:9001/#/dlndcniscd');
  message=element(by.css('message'));
});
describe("error page",function(){
  it('should have error in route ',function(){
    expect(browser.getCurrentUrl()).toContain('#/error');
  });
});
