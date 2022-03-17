const rewire = require ("rewire");


test('The function isOldEnoughToVote must exist.', () => {
    const result = rewire ('./app.js').__get__("isOldEnoughToVote");
    expect(result).toBeTruthy();
})

test('The function isOldEnoughToVote must return something.', () => {
    const result = rewire ('./app.js').__get__("isOldEnoughToVote");
    expect(result()).not.toBe(undefined);
})

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