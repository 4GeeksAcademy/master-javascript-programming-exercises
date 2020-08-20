const rewire = require("rewire");

const stdin = [].concat(__stdin);

const oldConsoleLog = console.log;
let _buffer = "";
console.log = jest.fn((txt) => _buffer = _buffer + txt);

test("Print hello world on the console", function(){
    
    require("./app.js");
    expect(console.log).toHaveBeenCalledWith("Hello World");

});