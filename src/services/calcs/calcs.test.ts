import { calcs } from './calcs';

describe('Given the calcs component function', () => {
    describe('When we pass to it two parameters', () => {
        test('Then it should return the sumatory of those parameters', () => {
            const value1 = '2';
            const value2 = '3';
            const expected = '2 + 3 = 5';
            const calculator = calcs();
            const result = calculator.sumatory(value1, value2);
            expect(result).toBe(expected);
        });

        test('Then it should return the subtraction of those parameters', () => {
            const value1 = '2';
            const value2 = '3';
            const expected = '2 - 3 = -1';
            const calculator = calcs();
            const result = calculator.substraction(value1, value2);
            expect(result).toBe(expected);
        });

        test('Then it should return the multiplication of those parameters', () => {
            const value1 = '2';
            const value2 = '3';
            const expected = '2 * 3 = 6';
            const calculator = calcs();
            const result = calculator.multiplication(value1, value2);
            expect(result).toBe(expected);
        });

        test('Then it should return the division of those parameters', () => {
            const value1 = '2';
            const value2 = '3';
            const expected = '2 / 3 = 0.6666666666666666';
            const calculator = calcs();
            const result = calculator.division(value1, value2);
            expect(result).toBe(expected);
        });
    });
});
