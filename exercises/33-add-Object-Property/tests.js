const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function addObjectProperty should exist", function(){
  const file = rewire("./app.js");
  const addObjectProperty  = file.__get__('addObjectProperty');
  expect(addObjectProperty).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    test("Function addObjectProperty should return something", function(){
  const file = rewire("./app.js");
  const addObjectProperty = file.__get__('addObjectProperty');
  expect(addObjectProperty()).toBeTruthy();
});


    it('console.log() function addObjectProperty should return a value of the entire 2nd object', function () {
        const file = require("./app.js");
    expect(console.log).toBeCalledWith(expect.objectContaining({
        name:'Mr. Burns',
        role: 'supervisor'
        }));
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);
    });
});

