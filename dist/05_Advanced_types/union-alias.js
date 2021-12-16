"use strict";
function combine(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number')
        result = +n1 + +n2;
    else
        result = n1.toString() + n2.toString();
    return result;
}
const combinedAge = combine(23, 'wdsd', 'as-number');
console.log(combinedAge);
const combinedName = combine('Pushkar', 'Kumar', 'as-string');
console.log(combinedName);
// const person: {
//     name: string;
//     age: number;
// } =
// const person: { 
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Pushkar',
//     age: 23,
//     hobbies: ['Swimming', 'coding', 'dancing'],
//     role: [2, 'author']
// }
// person.role.push('Class');
// person.role[1] = "";
// console.log(person.age);
// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }
// enum Role { ADMIN = 100, AUTHOR, DUMMY1, DUMMY2 };
// const person = {
//     name: 'Pushkar',
//     age: 23,
//     hobbies: ['Swimming', 'coding', 'dancing'],
//     role: Role.ADMIN
// }
// if (person.role == Role.ADMIN) {
//     console.log('its author');
// }
