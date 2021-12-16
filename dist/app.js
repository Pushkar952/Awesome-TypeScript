"use strict";
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(text);
    }
}
let user1;
user1 = new Person('Ruchika');
user1.greet("sdsdsds");
const e1 = {
    name: "Ruchika",
    startDate: new Date(),
    priviliges: ['server_access']
};
function addNumbers(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printUnknowEmployee(e1) {
    console.log(e1.name);
    if ('priviliges' in e1) {
        console.log(e1.priviliges);
    }
    if ('startDate' in e1) {
        console.log(e1.startDate);
    }
}
class Car {
    drive() {
        console.log(`Driving a car`);
    }
}
class Truck {
    drive() {
        console.log(`Driving a truck`);
    }
    loadMaterial() {
        console.log(`loading material on truck`);
    }
}
function useVehicle(v) {
    v.drive();
    if (v instanceof Truck) {
        v.loadMaterial();
    }
}
