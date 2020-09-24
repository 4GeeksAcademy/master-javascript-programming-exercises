const rewire = require ("rewire");

test ('You should return a string', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',21);
    expect(typeof output).toBe("string");
})

test ('The person name must be inside the string', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',21);
    expect(output.includes('Adrian')).toBe(true);
})

test ('The word "Welcome" must be inside the returned string when it\'s more than 21', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',21);
    expect(output.includes('Welcome')).toBe(true);
})

test ('The word "Go home" must be inside the returned string when it\' younger than 21 ', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',20);
    expect(output.includes('Go home')).toBe(true);
})

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