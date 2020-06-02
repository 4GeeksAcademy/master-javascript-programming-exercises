const rewire = require("rewire");

const stdin = [].concat(__stdin);

const oldConsoleLog = console.log;
console.log = jest.fn(() => null);

test("La function hello debe llamarse una vez", function(){
    
    require("./app.js");

    oldConsoleLog(stdin[0]);
    
    expect(console.log).toHaveBeenCalledWith("pupu");

});