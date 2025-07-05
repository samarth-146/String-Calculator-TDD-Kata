const { add } = require('./calculator');

describe("Basic comma-seperated numbers", () => {

    test('return 0 for empty string', () => {
        expect(add("")).toBe(0);
    });

    test('return the number if only one number is given',()=>{
        expect(add("7")).toBe(7);
    });

    test('return the sum of two numbers',()=>{
        expect(add('3,4')).toBe(7);
    });

});


