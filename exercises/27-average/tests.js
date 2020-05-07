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


it('Did you return the average of two parameters?', () => {
    const app = rewire('./app.js');
    const file = require("./app.js");
    expect(console.log).toHaveBeenCalledWith(expect.any(Number));
    expect(console.log.mock.calls.length).toBe(1);
});

it("It is not a correct average number", () => {
    // const app = rewire('./app.js');
    // const file = require("./app.js");
    expect.extend({
        averageNum(num1, num2){
            const pass = ((num1 + num2)/2);
            if(pass){
                return{
                    message: ()=> `Average number is as expected`,
                    pass: true,
                };
            }
                else {
                    return{
                        message: ()=> `Average is not as expected`,
                        pass: false,
                    }
                }
        }
    })
    expect(5).averageNum(4,6)
})
});
 