const rewire = require ("rewire");

test ('fuction pass a value of true', () => {
    const addProperty = rewire ('./app.js').__get__("addProperty");

    const myObj = {};
    expect(addProperty(myObj, 'myProperty')).toBe(true);
})

test ('fuction pass a value of true not string', () => {
    const addProperty = rewire ('./app.js').__get__("addProperty");

    const myObj = {};
    expect(addProperty(myObj, 'myProperty')).not.toBe("true");
})

console.log = jest.fn(() => null);
test ( 'console log should return true', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(true);
})