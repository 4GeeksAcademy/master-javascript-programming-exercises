const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function isEitherEven should exist", function(){
  const file = rewire("./app.js");
  const isEitherEven  = file.__get__('isEitherEven');
  expect(isEitherEven).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('console.log() should return a value of true if one of the given numbers is even.', function () {
        const file = require("./app.js");
        expect(console.log).toHaveBeenCalledWith(true);
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);
    });
});
 