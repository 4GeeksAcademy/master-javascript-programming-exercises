const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function areBothOdd should exist", function(){
  const file = rewire("./app.js");
  const areBothOdd  = file.__get__('areBothOdd');
  expect(areBothOdd).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('console.log() should return odd numbers with value of true', function () {
        const file = require("./app.js");
        expect(console.log).toHaveBeenCalledWith(true);
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);
    });
});
 