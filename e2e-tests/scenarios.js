'use strict';
/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('UserMng App', function() {
  beforeEach(function() {
    browser.get('http://localhost:8000');
  });
  var userList = element.all(by.repeater('user in $ctrl.users'));
  var inputSearch = element(by.model('$ctrl.search'));
  var genderSelect = element(by.model('$ctrl.gender'));

  it('Check model user list has 10 elements', function() {            
      expect(userList.count()).toBe(10);      
  });

  it('Make sure that the input search filter by name', function() {            
    inputSearch.sendKeys('Jonh')
    expect(userList.count()).toBe(1);

    inputSearch.clear();
    inputSearch.sendKeys('Jimmy')
  
    expect(userList.count()).toBe(2);
    inputSearch.clear();
  });

  it('Should delete one element', function(){
    userList.get(1).element(by.css('input[type="checkbox"]')).click();  
    element(by.css('.user-search-box input[value="Delete"]')).click();
    expect(userList.count()).toBe(9);
  });
  it('Should delete multiple elements', function(){
    element(by.css('.user-search-box input[value="Select All"]')).click();  
    element(by.css('.user-search-box input[value="Delete"]')).click();
    expect(userList.count()).toBe(0);
  });
  it('Should show only Female elements', function(){
    genderSelect.element(by.css('option[value="Female"]')).click();
    expect(userList.count()).toBe(4);
  });
});
