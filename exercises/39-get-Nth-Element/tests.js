const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function getNthElement should exist", function(){
  const file = rewire("./app.js");
  const getNthElement  = file.__get__('getNthElement');
  expect(getNthElement).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function getNthElement should return given integer of 3', function () {
        const file = require("./app.js");

 function getNthElement(arr, n) {
  return arr[n];
}
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});
