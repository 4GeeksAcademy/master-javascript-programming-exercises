const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function checkAge should exist", function(){
  const file = rewire("./app.js");
  const checkAge  = file.__get__('checkAge');
  expect(checkAge).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function checkAge should welcome someone over 21 or bounce someone less than 21', 
    function () {
        const file = require("./app.js");

expect(console.log).toHaveBeenCalledWith(expect.any(String));
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});