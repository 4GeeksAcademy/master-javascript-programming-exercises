const rewire = require("rewire");

test('Function renderInventory must exist', () => {
    const renderInventory = rewire("./app.js").__get__("renderInventory");
    expect(renderInventory).not.toBe(undefined);
});

test('The function should filter all the shoes that contain the word "black" in the array.', () => {
    const renderInventory = rewire("./app.js").__get__("renderInventory");

    let output = renderInventory([
        {
            name: 'Brunello Cucinelli',
            shoes: [
                { name: 'tasselled black low-top lace-up', price: 1000 },
                { name: 'tasselled green low-top lace-up', price: 1100 },
                { name: 'plain beige suede moccasin', price: 950 },
                { name: 'plain olive suede moccasin', price: 1050 }
            ]
        },
        {
            name: 'Gucci',
            shoes: [
                { name: 'red leather laced sneakers', price: 800 },
                { name: 'black leather laced sneakers', price: 900 }
            ]
        }])
    expect(output).toEqual([
        ['Brunello Cucinelli', 'tasselled black low-top lace-up', 1000],
        ['Gucci', 'black leather laced sneakers', 900]
    ])


    output = renderInventory([
        {
            name: 'Adidas',
            shoes: [
                { name: 'ZX 2K BOOST SHOES', price: 150 },
                { name: 'MULTIX SHOES', price: 80 },
            ]
        },
        {
            name: 'Nike',
            shoes: [
                { name: 'Jordan 6 Rings', price: 170 },
                { name: 'Nike Air Max 2090 EOI', price: 160 }
            ]
        }])
    expect(output).toEqual([])
});