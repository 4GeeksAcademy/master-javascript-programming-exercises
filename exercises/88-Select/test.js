const rewire = require ("rewire");

test('Function select must exist', () => {
    const select = rewire("./app.js").__get__("select");
    expect(select).not.toBe(undefined);
});

test ('The return object must contain the properties specified on the array.', () => {
    const select = rewire ('./app.js').__get__("select");
    var arr = ['a', 'c', 'e'];
    var obj = {
                a: 1,
                b: 2,
                c: 3,
                d: 4
    };
    var output = select(arr, obj);

   
    expect(output['a']).toBe(1)
    expect(output['c']).toBe(3)

})


test ('The return object must not contain the properties that are not present in both arr and obj.', () => {
    const select = rewire ('./app.js').__get__("select");
    var arr = ['c', 'e','l'];
    var obj = {
                a: 5,
                b: 2,
                c: 4,
                d: 9,
                h: 8,
                l: 12
    };
    var output = select(arr, obj);

   
    expect(output['a']).toBe(undefined)
    expect(output['b']).toBe(undefined)
    expect(output['d']).toBe(undefined)
    expect(output['h']).toBe(undefined)


})

