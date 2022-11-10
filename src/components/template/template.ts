import { ICalcs } from '../../models/models.js';
import { calcs } from '../../services/calcs/calcs.js';

export const template = (value1: string, value2: string) => {
    const calculator: ICalcs = calcs();
    const template = `
    <h1>CALCULADORA</h1>
    <h2>${calculator.sumatory(value1, value2)}</h2>
    <h2>${calculator.substraction(value1, value2)}</h2>
    <h2>${calculator.multiplication(value1, value2)}</h2>
    <h2>${calculator.division(value1, value2)}</h2>
    `;

    return template;
};
