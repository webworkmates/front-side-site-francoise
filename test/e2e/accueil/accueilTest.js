/**
 * Created by yanning on 18/04/2015.
 */
'use strict';
var message;
describe("accueil page",function(){

  beforeEach(function () {
    browser.get('http://localhost:9001/#/accueil');
    message=element(by.css('message'));
  });

 it('should have accueil in route ',function(){
   expect(browser.getCurrentUrl()).toContain('#/accueil');
});
});
