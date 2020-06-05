const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function equalsTen should exist", function(){
  const file = rewire("./app.js");
  const equalsTen  = file.__get__('equalsTen');
  expect(equalsTen).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function equalsTen should return a value of false  whether or not the given number is 10', 
    function () {
        const file = require("./app.js");

expect(console.log).toHaveBeenCalledWith(false);
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});