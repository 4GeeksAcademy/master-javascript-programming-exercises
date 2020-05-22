const rewire = require ("rewire");

test ('function should return Welcome, Adrian!', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',21)
    expect(output).toBe('Welcome, Adrian!');
})

test ('function should return Go home, Adrian!', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',20)
    expect(output).toBe('Go home, Adrian!');
})

console.log = jest.fn(() => null);
test ( 'console log should return output', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith('Welcome, Adrian!');
})