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

test("return the sum of any amount of numbers",()=>{
    expect(add('3,4,5')).toBe(12);
})

test("handle new lines with commas",()=>{
    expect(add('1\n2,3')).toBe(6);
});

test('custom delimeter support at the start of the string',()=>{
    expect(add('//;\n1;2')).toBe(3);
});

describe('handle the negative numbers',()=>{
    test('show negative number in the exception message',()=>{
        expect(()=>add('-1,2,3')).toThrow("Negative numbers are not allowed -1");
    });
    test('show all the negative numbers in the exception message',()=>{
        expect(()=>add('1,-2,-5')).toThrow("Negative numbers are not allowed -2,-5");
    });
});

test('number greater than 1000 should be ignored',()=>{
    expect(add('1,1001,1000')).toBe(1001);
});
