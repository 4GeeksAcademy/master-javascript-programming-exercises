const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function isLessThan30 should exist", function(){
  const file = rewire("./app.js");
  const isLessThan30  = file.__get__('isLessThan30');
  expect(isLessThan30).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function isLessThan30 should return a value of true whether the given number is less than 30', 
    function () {
        const file = require("./app.js");

expect(console.log).toHaveBeenCalledWith(true);
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});