"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
let number1;
number1 = 3;
const number2 = 3.8;
const printResult = true;
const resultPhrase = 'Result is :  ';
add(number1, number2, printResult, resultPhrase);
