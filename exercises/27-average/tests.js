const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function average should exist", function(){
  const file = rewire("./app.js");
  const average  = file.__get__('average');
  expect(average).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


it('console.log() should return value of 5', () => {
    const app = rewire('./app.js');
    const file = require("./app.js");
    expect(console.log).toHaveBeenCalledWith(5);
    expect(console.log.mock.calls.length).toBe(1);
});
});