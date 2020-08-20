const rewire = require ("rewire");

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