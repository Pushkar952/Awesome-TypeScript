"use strict";
// this is different then any, any removes all type check
// where as unkown is still bounded by types it is declared.
//Unknown Type
let userInput;
let userName;
userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// Crashes the script and hence it's return type is never.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError('an error encountered', 500);
console.log(result);
