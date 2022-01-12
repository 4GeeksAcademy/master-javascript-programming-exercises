const rewire = require("rewire");

test("Function removeElement should exist", function(){
    const file = rewire("./app.js");
    const removeElement = file.__get__('removeElement');
    expect(removeElement).toBeTruthy();
});

test("Function removeElement should return an array with all the elements except the discarder", function(){
    const file = rewire("./app.js");
    const removeElement = file.__get__('removeElement');
    expect(removeElement([1, 2, 3, 2, 1], 2)).toEqual([1, 3, 1]);
});

test("Function removeElement should return an array with all the elements except the discarder, testing with different values", function(){
    const file = rewire("./app.js");
    const removeElement = file.__get__('removeElement');
    expect(removeElement([6, 4, 4, 5, 1, 0, 4, 2, 3], 4)).toEqual([6, 5, 1, 0, 2, 3]);
});

test("Function removeElement should return an empty array when receives an empty array", function(){
    const file = rewire("./app.js");
    const removeElement = file.__get__('removeElement');
    expect(removeElement([], 3)).toEqual([]);
});

test("Function removeElement should return an empty array when the discarder matches all the values", function(){
    const file = rewire("./app.js");
    const removeElement = file.__get__('removeElement');
    expect(removeElement([3, 3, 3, 3], 3)).toEqual([]);
});