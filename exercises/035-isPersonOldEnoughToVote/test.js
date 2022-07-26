const rewire = require ("rewire");
const isPersonOldEnoughToVote = rewire("./app.js").__get__("isPersonOldEnoughToVote");
test('Function isPersonOldEnoughToVote must exist', () => {
  
    expect(isPersonOldEnoughToVote).not.toBe(undefined);
});
test('Function isPersonOldEnoughToVote must return something', () => {
  
    expect(isPersonOldEnoughToVote({})).not.toBe(undefined);
});

test ('Function should return a false if age less than 18. Testing with 17', () => {
   
    expect(isPersonOldEnoughToVote({ age: 17 })).toBe(false);
})
test ('Function should return a false if age less than 18. Testing with 5', () => {
   
    expect(isPersonOldEnoughToVote({ age: 5 })).toBe(false);
})
test ('Function should return a true if age are greather than or equal to 18. Testing with 18', () => {
  
    expect(isPersonOldEnoughToVote({ age: 18 })).toBe(true);

})
test ('Function should return a true if age are greather than or equal to 18. Testing with 20', () => {
  
   
    expect(isPersonOldEnoughToVote({ age: 20 })).toBe(true);
})