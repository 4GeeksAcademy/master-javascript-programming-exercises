const rewire = require ("rewire");

test ('function should return Joe Smith', () => {
    const getFullName = rewire ('./app.js').__get__("getFullName");

    const output = getFullName('Joe','Smith')
    expect(output).toBe('Joe Smith');
})

console.log = jest.fn(() => null);
test ('function should return Joe Smith', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith("Joe Smith");
})