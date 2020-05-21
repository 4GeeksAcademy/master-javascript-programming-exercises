const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function getFirstElement should exist", function(){
  const file = rewire("./app.js");
  const getFirstElement  = file.__get__('getFirstElement');
  expect(getFirstElement).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function getFirstElement should return given integer of 1', function () {
        const file = require("./app.js");

 function getNthElement(arr, n) {
  return arr[n];
}
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});
