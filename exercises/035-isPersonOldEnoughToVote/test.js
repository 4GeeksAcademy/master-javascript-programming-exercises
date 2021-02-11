const rewire = require ("rewire");

test('Function isPersonOldEnoughToVote must exist', () => {
    const isPersonOldEnoughToVote = rewire("./app.js").__get__("isPersonOldEnoughToVote");
    expect(isPersonOldEnoughToVote).not.toBe(undefined);
});

test ('Function should return a false if age less than 18', () => {
    const isPersonOldEnoughToVote = rewire ('./app.js').__get__("isPersonOldEnoughToVote");
    expect(isPersonOldEnoughToVote({
        age:17
    })).toBe(false);
})
test ('Function should return a true if age are greather than or equal to 18', () => {
    const isPersonOldEnoughToVote = rewire ('./app.js').__get__("isPersonOldEnoughToVote");
    expect(isPersonOldEnoughToVote({
        age:18
    })).toBe(true);
})