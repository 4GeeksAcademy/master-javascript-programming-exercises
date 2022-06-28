const rewire = require ("rewire");
const getLengthOfTwoWords = rewire('./app.js').__get__('getLengthOfTwoWords');

test('The function getLengthOfTwoWords must exist.', ()=>{
    expect(getLengthOfTwoWords).toBeTruthy();
})

test('The function getLengthOfTwoWords should return something.',()=>{
    expect(getLengthOfTwoWords('some', 'words')).not.toBe(undefined);
})

test ("function should return the sum of their lengths. Testing with 'some', 'words'", () => {
    expect(getLengthOfTwoWords('some', 'words')).toBe(9);
})
test ("function should return the sum of their lengths. Testing with 'juana', 'lacubana'", () => {
    expect(getLengthOfTwoWords('juana', 'lacubana')).toBe(13);
})