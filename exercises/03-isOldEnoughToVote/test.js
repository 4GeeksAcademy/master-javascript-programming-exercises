const rewire = require ("rewire");

test ('should return is old enough', () => {
    const isOldEnoughToVote = rewire ('./app.js').__get__("isOldEnoughToVote");

    const result = isOldEnoughToVote(22);
    expect(result).toBeTruthy();

})

test ('should return is old enough', () => {
    const isOldEnoughToVote = rewire ('./app.js').__get__("isOldEnoughToVote");

    const result = isOldEnoughToVote(17);
    expect(result).toBeFalsy();

})
