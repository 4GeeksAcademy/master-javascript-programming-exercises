const rewire = require ("rewire");

test ('The function isOldEnoughToVote must exist', () => {
    const isOldEnoughToVote = rewire ('./app.js').__get__("isOldEnoughToVote");
    expect(isOldEnoughToVote).not.toBe(undefined);
})

test('Function isOldEnoughToVote must return a boolean', () => {
    const isOldEnoughToVote = rewire("./app.js").__get__("isOldEnoughToVote");
    expect(typeof(isOldEnoughToVote(21))).toBe('boolean');
});
test('Function isOldEnoughToVote must return true or false', () => {
    const isOldEnoughToVote = rewire("./app.js").__get__("isOldEnoughToVote");
    expect(isOldEnoughToVote(21)).not.toBe(undefined);
});

test ('is old enough to legally vote in the United States.', () => {
    const isOldEnoughToVote = rewire ('./app.js').__get__("isOldEnoughToVote");

    const result = isOldEnoughToVote(18);
    expect(result).toBe(true);

})

test ('is not old enough to legally vote in the United States.', () => {
    const isOldEnoughToVote = rewire ('./app.js').__get__("isOldEnoughToVote");

    const result = isOldEnoughToVote(17);
    expect(result).toBe(false);

})