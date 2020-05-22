const rewire = require ("rewire");

test ('should return is old enough', () => {
    const isOldEnoughToVote = rewire ('./app.js').__get__("isOldEnoughToVote");

    const result = isOldEnoughToVote(18);
    expect(result).toBe(true);

})

test ('should return isnt old enough', () => {
    const isOldEnoughToVote = rewire ('./app.js').__get__("isOldEnoughToVote");

    const result = isOldEnoughToVote(17);
    expect(result).toBe(false);

})

console.log = jest.fn(() => null);
test ( 'console log should return true', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(true);
})