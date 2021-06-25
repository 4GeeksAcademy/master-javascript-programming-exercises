const rewire = require("rewire");

test('Function greetCustomer must exist', () => {
    const greetCustomer = rewire("./app.js").__get__("greetCustomer");
    expect(greetCustomer).not.toBe(undefined);
});

test('If the name is not found in customerData you should welcome as the first time', () => {
    const greetCustomer = rewire("./app.js").__get__("greetCustomer");

    let output = greetCustomer('Carl')
    expect(output).toBe('Welcome! Is this your first time?')
})
test('If the Client who has visited only once must say "Welcome back ..."', () => {
    const greetCustomer = rewire("./app.js").__get__("greetCustomer");

    let output = greetCustomer('Joe')
    expect(output).toBe("Welcome back, Joe! We're glad you liked us the first time!")
})

test('If the Client who has visited more than once must say "Welcome back ..."', () => {
    const greetCustomer = rewire("./app.js").__get__("greetCustomer");

    let output = greetCustomer('Carol')
    expect(output).toBe("Welcome back, Carol! So glad to see you again!")
})