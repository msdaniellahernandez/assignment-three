const { extractValue, vowelCount, addKeyAndValue, partition } = require('../assign');

describe("#extractValue", function() {
    it("returns a new array with the value of each key in an array of objects", function() {
        const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
        expect(extractValue(arr, 'name')).toEqual(['Elie', 'Tim', 'Matt', 'Colt']);
    });
});

describe("#vowelCount", function() {
    it("returns an object with the vowels and the number of their occurrences", function() {
        expect(vowelCount('Elie')).toEqual({e:2, i:1});
        expect(vowelCount('hmmm')).toEqual({});
    });
});

describe("#addKeyAndValue", function() {
    it("adds a key and value to each object in an array", function() {
        const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
        const updatedArr = [
            {name: 'Elie', title: 'Instructor'},
            {name: 'Tim', title: 'Instructor'},
            {name: 'Matt', title: 'Instructor'},
            {name: 'Colt', title: 'Instructor'}
        ];
        expect(addKeyAndValue(arr, 'title', 'Instructor')).toEqual(updatedArr);
    });
});

describe("#partition", function() {
    it("returns an array of two arrays based on the callback", function() {
        function isEven(val) {
            return val % 2 === 0;
        }
        const arr = [1,2,3,4,5,6,7,8];
        expect(partition(arr, isEven)).toEqual([[2,4,6,8], [1,3,5,7]]);
    });
});
