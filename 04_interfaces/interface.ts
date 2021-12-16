// //Interfaces
// //Public and private declaration is not possible in Interface.
// ///Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface. The TypeScript compiler does not convert interface to JavaScript.
// interface Named {
//     readonly name: string;
//     // optional paramter is defined with ?. 
//     lastName?: string;
// }
// // Greetable interface extends Named interface and can extends to multiple class
// interface Greetable extends Named {
//     greet(phrase: string): void;
// }

// class Person implements Greetable {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
//     greet(phrase: string) {
//         console.log(phrase + '' + this.name)
//     }
// }
// let user1: Greetable;
// user1 = new Person('Rahul');
// user1.greet("Hi i am ");

// user1 = {
//     name: 'Pushkar',
//     greet(phrase: string) {
//         console.log(phrase + '' + this.name)
//     }
// }

// user1.greet("Hi i am ")
// //// Interface as a function
// interface AddFn {
//     (a: number, b: number): number;
// }
// let addNo: AddFn;
// // AddNo is of type AddFn interface
// addNo = (a: number, b: number) => {
//     return a + b;
// }

// console.log(addNo(2, 3))
