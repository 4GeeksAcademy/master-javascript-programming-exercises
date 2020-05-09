const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function computeAreaOfATriangle should exist", function(){
  const file = rewire("./app.js");
  const computeAreaOfATriangle  = file.__get__('computeAreaOfATriangle');
  expect(computeAreaOfATriangle).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function computeAreaOfATriangle should return a value of 12', function () {
        const file = require("./app.js");
        expect(console.log).toHaveBeenCalledWith(12);
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);
    });
});
 