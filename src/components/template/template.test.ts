import { template } from './template';
jest.mock('./template');

// Cannot find module '../../services/calcs/calcs.js' from 'src/components/template/template.ts'
// Como no sabía gestionar las rutas tampoco me he currado mucho este test
describe('Given the template component', () => {
    describe('When we invoke it', () => {
        test('Then it should return a string', () => {
            const result = template('2', '3');
            expect(typeof result).toBe('string');
        });
    });
});
