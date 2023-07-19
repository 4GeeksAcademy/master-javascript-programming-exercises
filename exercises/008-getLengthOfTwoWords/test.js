const rewire = require ("rewire");
const getLengthOfTwoWords = rewire('./app.js').__get__('getLengthOfTwoWords');

test('The function getLengthOfTwoWords must exist', ()=>{
    expect(getLengthOfTwoWords).toBeTruthy();
})

test('The function getLengthOfTwoWords should return something',()=>{
    expect(getLengthOfTwoWords('some', 'words')).not.toBe(undefined);
})

test ("Function should return the sum of their lengths", () => {
    expect(getLengthOfTwoWords('some', 'words')).toBe(9);
})
test ("Function should return the sum of their lengths. Testing with different values", () => {
    expect(getLengthOfTwoWords('juana', 'lacubana')).toBe(13);
})
