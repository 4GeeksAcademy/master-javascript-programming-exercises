const rewire = require ("rewire");

test ('The function checkAge must exist', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");
    expect(checkAge).not.toBe(undefined);
})

test ('You should return a string', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',21);
    expect(typeof output).toBe("string");
})

test ("The person's name must be inside the string", () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',21);
    expect(output.includes('Adrian')).toBe(true);
})

test ('The word "Welcome" must be inside the returned string when the person is 21 or older', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',21);
    expect(output.includes('Welcome')).toBe(true);
})

test ('The words "Go home" must be inside the returned string when the person is younger than 21', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',20);
    expect(output.includes('Go home')).toBe(true);
})

test ('Should return "Welcome, Adrian!" if they are 21 or older', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',21);
    expect(output).toBe('Welcome, Adrian!');
})

test ('Should return "Go home, Adrian!" if they are younger than 21', () => {
    const checkAge = rewire ('./app.js').__get__("checkAge");

    const output = checkAge('Adrian',20);
    expect(output).toBe('Go home, Adrian!');
})
