"use strict";
// Intersection Types/interface
var _a;
;
;
const e1 = {
    name: "Pushkar",
    privileges: ["server_access"],
    startDate: new Date()
};
console.log(e1.privileges);
/// Type Guards for simple types
function addNumbers(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printUnkownEmployee(e1) {
    console.log(`name ${e1.name}`);
    if ('privileges' in e1) {
        console.log(`Privileges ${e1.privileges}`);
    }
    if ('startDate' in e1) {
        console.log(`StartDate  ${e1.startDate}`);
    }
}
printUnkownEmployee(e1);
/// TypeGuard for Classes
class Car {
    drive() {
        console.log('Driving Car.');
    }
}
class Truck {
    drive() {
        console.log('Driving truck...');
    }
    loadMaterial() {
        console.log("Loading material on truck");
    }
}
function useVehicle(v) {
    v.drive();
    if (v instanceof Truck) {
        v.loadMaterial();
    }
}
useVehicle(new Truck());
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`Speed of ${animal.type} is ${speed}`);
}
moveAnimal({ 'type': 'horse', 'runningSpeed': 20 });
// Type Casting
// type casting the html element so that Typescript understands the same.
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there...';
}
const errorBag = {
    email: 'Not a valid email',
    userName: 'Not a Valid username'
};
function addNumber(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// const res = addNumber('Pushkar', 'Kumar');
const res = addNumber(1, 'Kumar');
// Optional Chaining
const fetchedUserData = {
    id: 'u1',
    name: 'pushkar',
    job: { title: 'CEO', description: 'My own Company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// Nullish Coalescing
// ?? it's fallback in case we have null value
