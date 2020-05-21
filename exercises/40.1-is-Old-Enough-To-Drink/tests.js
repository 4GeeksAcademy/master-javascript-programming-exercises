const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function isOldEnoughToDrink should exist", function(){
  const file = rewire("./app.js");
  const isOldEnoughToDrink  = file.__get__('isOldEnoughToDrink');
  expect(isOldEnoughToDrink).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function isOldEnoughToDrink should returnvalue of true ', function () {
        const file = require("./app.js");
        
expect(console.log).toHaveBeenCalledWith(true);
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});
