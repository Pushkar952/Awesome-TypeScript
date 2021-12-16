"use strict";
// // Intersection Types/interface
// interface Admin {
//     name: string;
//     privileges: string[];
// };
// interface Employee {
//     name: string;
//     startDate: Date;
// };
// interface ElevatedEmployee extends Admin, Employee { }
// const e1: ElevatedEmployee = {
//     name: "Pushkar",
//     privileges: ["server_access"],
//     startDate: new Date()
// }
// console.log(e1.privileges)
// type Numeric = number | string;
// type NewType = string | boolean;
// type Combined = Numeric & NewType;
// /// Type Guards for simple types
// function addNumbers(a: Numeric, b: Numeric) {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }
// // TypeGuard for  unknown types
// type UnknownEmployee = Employee | Admin;
// function printUnkownEmployee(e1: UnknownEmployee) {
//     console.log(`name ${e1.name}`);
//     if ('privileges' in e1) {
//         console.log(`Privileges ${e1.privileges}`)
//     }
//     if ('startDate' in e1) {
//         console.log(`StartDate  ${e1.startDate}`)
//     }
// }
// printUnkownEmployee(e1);
// /// TypeGuard for Classes
// class Car {
//     drive() {
//         console.log('Driving Car.')
//     }
// }
// class Truck {
//     drive() {
//         console.log('Driving truck...')
//     }
//     loadMaterial() {
//         console.log("Loading material on truck")
//     }
// }
// type Vehicle = Car | Truck;
// function useVehicle(v: Vehicle) {
//     v.drive();
//     if (v instanceof Truck) {
//         v.loadMaterial();
//     }
// }
// useVehicle(new Truck())
// // Discriminated Unions
// interface Bird {
//     type: 'bird'
//     flyingSpeed: number;
// }
// interface Horse {
//     type: 'horse'
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log(`Speed of ${animal.type} is ${speed}`);
// }
// moveAnimal({ 'type': 'horse', 'runningSpeed': 20 })
// // Type Casting
// // type casting the html element so that Typescript understands the same.
// const userInputElement = document.getElementById('user-input');
// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hi there...';
// }
// /// Index Properties
// // It gives us the flexibility of defining possible
// // key value pairs. 
// interface ErrorContainer {
//     [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//     email: 'Not a valid email',
//     userName: 'Not a Valid username'
// };
// // Function overloads
// function addNumber(a: number, b: number): number;
// function addNumber(a: string, b: string): string;
// function addNumber(a: string, b: number): string;
// function addNumber(a: number, b: string): string;
// function addNumber(a: combinable, b: combinable) {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }
// // const res = addNumber('Pushkar', 'Kumar');
// const res = addNumber(1, 'Kumar');
// // Optional Chaining
// const fetchedUserData = {
//     id: 'u1',
//     name: 'pushkar',
//     job: { title: 'CEO', description: 'My own Company' }
// };
// console.log(fetchedUserData ?.job ?.title);
// // Nullish Coalescing
// // ?? it's fallback in case we have null value
