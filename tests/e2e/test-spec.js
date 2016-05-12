describe('some end to end tests', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:63342/test-testing/www/index.html');

    // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    // element(by.css('[value="add"]')).click();
    //
    // var todoList = element.all(by.repeater('todo in todoList.todos'));
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual('write first protractor test');
    //
    // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    // expect(completedAmount.count()).toEqual(2);
    var someElement = element(by.binding('testCtrl.somePublicField'));
    someElement.getText().then(function(text) {
      console.log('text in someElement : ' + text);
    });
    expect(someElement.getText()).toEqual("some public value")
  });
});