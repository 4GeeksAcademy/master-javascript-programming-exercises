const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function isOldEnoughToDrinkAndDrive should exist", function(){
  const file = rewire("./app.js");
  const isOldEnoughToDrinkAndDrive  = file.__get__('isOldEnoughToDrinkAndDrive');
  expect(isOldEnoughToDrinkAndDrive).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function isOldEnoughToDrinkAndDrive should returnvalue of false ', function () {
        const file = require("./app.js");
        
expect(console.log).toHaveBeenCalledWith(false);
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});
