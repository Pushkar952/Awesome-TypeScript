"use strict";
const user = 'Pushkar';
let age = 29;
age = 30;
const add1 = (a, b = 4) => a + b;
console.log(add1(2));
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', ev => console.log(ev));
}
// Arrow function
const printOutput = (output) => console.log(output);
// SpreadOperator
const hobbies = ['Sports', 'music'];
const activeHobbies = ['Hiking',];
activeHobbies.push(...hobbies);
const person = {
    firstName: 'Pushkar',
    personAge: 27
};
//Copying  a spread operator.
const copiedObject = Object.assign({}, person);
person.firstName = 'Pushkar1';
console.log(person.firstName);
console.log(copiedObject.firstName);
// Rest params with multiple values.
const addMultiple = (...number) => {
    let result = 0;
    return number.reduce((currResult, currValue) => {
        return currResult + currValue;
    }, 0);
};
const addResult = addMultiple(2, 3.4, 45, 545);
console.log(addResult);
//Array Destructuring
const [h1, h2, ...rh] = activeHobbies;
console.log(h1, h2, rh);
//object Destructuring with name1 acting as an alias to firstName
const { firstName: name1, personAge } = person;
console.log(name1);
