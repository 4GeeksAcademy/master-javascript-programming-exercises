const rewire = require ("rewire");

test('Function addFullNameProperty must exist', () => {
    const addFullNameProperty = rewire("./app.js").__get__("addFullNameProperty");
    expect(addFullNameProperty).not.toBe(undefined);
});


test('The function addFullNameProperty must return an object', () => {
    const addFullNameProperty = rewire("./app.js").__get__("addFullNameProperty");
    let result = addFullNameProperty({});
    expect(typeof(result)).toBe("object");
});

test('The object that the function addFullNameProperty returns must include a fullName property', () => {
    const addFullNameProperty = rewire("./app.js").__get__("addFullNameProperty");
    let result = addFullNameProperty({});
    expect(typeof(result.fullName)).not.toBe(undefined);
});


test('Remember to include a space between firstName and lastName when creating the fullName property', () => {
    const addFullNameProperty = rewire("./app.js").__get__("addFullNameProperty");
    let result = addFullNameProperty({firstName: "Jade", lastName: "Smith"});

    expect(result.fullName.includes(" ")).toBe(true);
});


test('The function addFullNameProperty must return new object called "fullName"', () => {
    const addFullNameProperty = rewire("./app.js").__get__("addFullNameProperty");
    let result = addFullNameProperty({firstName: "Jade", lastName: "Smith"});

    expect(result).toEqual({firstName: "Jade", lastName: "Smith", fullName: "Jade Smith"});
});
