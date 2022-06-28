const rewire = require ("rewire");
const areBothOdd = rewire("./app.js").__get__("areBothOdd");

test('Function areBothOdd must exist', () => {
    expect(areBothOdd).not.toBe(undefined);
});

test('Function areBothOdd must return boolean', () => {
    expect(typeof(areBothOdd(2,3))).toBe("boolean");
});

test ('Tried with (8,12) and it should return false', () => {
    expect(areBothOdd(8, 12)).toBe(false);
})

test ('Tried with (7,11) and it should return true', () => {
    expect(areBothOdd(7, 11)).toBe(true);

})

test ('Tried with (3, 5) and it should return true', () => {
    expect(areBothOdd(3, 5)).toBe(true);

})

test ('Tried with (7, 4) and it should return false', () => {
    expect(areBothOdd(7, 4)).toBe(false);

})

test ('Tried with (6, 11) and it should return false', () => {
    expect(areBothOdd(6, 11)).toBe(false);

})