const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function cube should exist", function(){
  const file = rewire("./app.js");
  const cube  = file.__get__('cube');
  expect(cube).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function cube should return a value of 27', function () {
        const file = require("./app.js");
        expect(console.log).toHaveBeenCalledWith(27);
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);
    });
});
 