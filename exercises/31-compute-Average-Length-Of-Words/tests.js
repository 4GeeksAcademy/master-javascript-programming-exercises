const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function computeAverageLengthOfWords should exist", function(){
  const file = rewire("./app.js");
  const computeAverageLengthOfWords  = file.__get__('computeAverageLengthOfWords');
  expect(computeAverageLengthOfWords).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function computeAverageLengthOfWords should return a value of 6', function () {
        const file = require("./app.js");
        expect(console.log).toHaveBeenCalledWith(6);
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);
    });
});
 