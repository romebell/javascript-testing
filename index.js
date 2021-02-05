let rome = 'Rome'; // what datatype is this? (string)
let age = 33; // what datatype is this? (number)
let isCool = true; // what datatype is this? (boolean)
const object = {
    class: 'SEI-111',
    company: 'GA'
} // what datatype is this? (object)

const array = [1, 'hello', { name: 'John'}, true]; // what datatype is this? (array)

function add(num1, num2) {
    return num1 + num2;
} // what is this? (function)

function multiply(num1, num2) {
    // handle an edge case
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 * num2;
    } else {
        throw Error('One or both inputs are NOT numbers');
    }
}

module.exports = {
    rome,
    age,
    isCool,
    object,
    add,
    array,
    multiply
}