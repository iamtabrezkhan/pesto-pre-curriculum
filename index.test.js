const {
    describe,
    it,
    expect
} = require('./index')

function add(x, y) {
    return x+y;
}

function subtract(x, y) {
    return x-y;
}

function divide(x, y) {
    return x/y;
}

function multiply(x, y) {
    return x*y;
}

// testing for add function
describe('add', () => {
    it('should add two numbers', () => {
        const result = add(10, 5);
        expect(result).toBe(15);
    })
})

// testing for subtract function
describe('subtract', () => {
    it('should subtract second number from first number', () => {
        const result = subtract(1, 5);
        expect(result).toBe(-4);
    })
})

// testing for divide function
describe('divide', () => {
    it('should divide first number by second number', () => {
        const result = divide(20, 10);
        expect(result).toBe(2);
    })
})

// testing for multiply function
describe('multiply', () => {
    it('should multiply two numbers', () => {
        const result = multiply(3, 4);
        expect(result).toBe(12);
    })
})