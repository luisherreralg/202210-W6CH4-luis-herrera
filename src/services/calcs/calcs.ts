export const calcs = () => {
    const sumatory = (value1: string, value2: string) => {
        const sum = Number(value1) + Number(value2);
        const resultSum = `${value1} + ${value2} = ${sum}`;
        return resultSum;
    };

    const substraction = (value1: string, value2: string) => {
        const substract = Number(value1) - Number(value2);
        const resultSubstract = `${value1} - ${value2} = ${substract}`;
        return resultSubstract;
    };

    const multiplication = (value1: string, value2: string) => {
        const multiply = Number(value1) * Number(value2);
        const resultMultiply = `${value1} * ${value2} = ${multiply}`;
        return resultMultiply;
    };

    const division = (value1: string, value2: string) => {
        const divide = Number(value1) / Number(value2);
        const resultDivide = `${value1} / ${value2} = ${divide}`;
        return resultDivide;
    };

    return {
        sumatory,
        substraction,
        multiplication,
        division,
    };
};
