const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function addArrayProperty should exist", function(){
  const file = rewire("./app.js");
  const addArrayProperty  = file.__get__('addArrayProperty');
  expect(addArrayProperty).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function addArrayProperty should return a new property of the object [1, 3]', function () {
        const file = require("./app.js");
        var myObj = {};
        var myArray = [1, 3];

        function addArrayProperty(obj, key, arr) {
        obj[key] = arr;
        }
        addArrayProperty(myObj, "key", myArray);
        let mytest = myObj.key

    expect(_buffer).toMatch(mytest.map(n => n).join(","));
    // expect(_buffer).toEqual(mytest);
    });
});
