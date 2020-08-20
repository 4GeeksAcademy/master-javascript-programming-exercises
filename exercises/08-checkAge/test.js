const rewire = require ("rewire");

test ('should return Welcome, Adrian! if they are 21 or older.', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',21);
    expect(output).toBe('Welcome, Adrian!');
})

test ('should return Go home, Adrian! if they are younger than 21.', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',20);
    expect(output).toBe('Go home, Adrian!');
})