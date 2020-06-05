const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function getLengthOfTwoWords should exist", function(){
  const file = rewire("./app.js");
  const getLengthOfTwoWords  = file.__get__('getLengthOfTwoWords');
  expect(getLengthOfTwoWords).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function getLengthOfTwoWords should return the the sum of their lengths', 
    function () {
        const file = require("./app.js");

expect(console.log).toHaveBeenCalledWith(expect.any(Number));
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});