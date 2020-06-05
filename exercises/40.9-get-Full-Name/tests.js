const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function getFullName should exist", function(){
  const file = rewire("./app.js");
  const getFullName  = file.__get__('getFullName');
  expect(getFullName).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function getFullName should return a single string with the first and last names', 
    function () {
        const file = require("./app.js");

expect(console.log).toHaveBeenCalledWith(expect.any(String));
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});