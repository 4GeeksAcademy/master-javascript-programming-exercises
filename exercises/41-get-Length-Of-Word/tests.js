const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function getLengthOfWord should exist", function(){
  const file = rewire("./app.js");
  const getLengthOfWord  = file.__get__('getLengthOfWord');
  expect(getLengthOfWord).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function getLengthOfWord should return the length of the given word', 
    function () {
        const file = require("./app.js");

expect(console.log).toHaveBeenCalledWith(expect.any(Number));
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});