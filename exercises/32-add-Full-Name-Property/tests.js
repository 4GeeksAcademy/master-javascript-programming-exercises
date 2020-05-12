const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function addFullNameProperty should exist", function(){
  const file = rewire("./app.js");
  const addFullNameProperty  = file.__get__('addFullNameProperty');
  expect(addFullNameProperty).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function addFullNameProperty should return a full name of Jade Smith', function () {
        const file = require("./app.js");


   expect(console.log).toBeCalledWith(expect.objectContaining({
   firstName: 'Jade',
   lastName: 'Smith'
  }));
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);
    });
});

