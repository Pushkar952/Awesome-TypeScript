// // Generics

// const names: Array<string> = [];
// // here the promise will resolve of
// const promise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is resolved');
//     }, 3000);

// })
// promise.then((data) => {
// });

// // custom generic function which takes two generic types and merges
// // them
// // Contraints
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "pushkar", skils: ['TypeScript'] }, { age: 27 })
// console.log(mergedObj)


// // Another generic function
// interface Lengthy {
//     length: number
// }

// function countAndDescribe<T extends Lengthy>(e: T): [T, string] {
//     let description = 'No Value';
//     if (e.length == 0) {
//         description = 'Got no value'
//     }
//     else if (e.length > 1) {
//         description = 'Got' + e.length + 'values'
//     }
//     return [e, description];
// }

// const value = countAndDescribe('My name is Pushkar')
// console.log(value);

// // the keyOf constraint
// function striveAndReturn<T extends object, U extends keyof T>(obj: T, key: U) {
//     return obj[key];
// }

// console.log(striveAndReturn({ id: 23 }, 'id'))

// /// Generic classes with constraints

// class DataStorage<T extends string | number> {
//     private data: T[] = [];

//     addItem(item: T) {
//         this.data.push(item);
//     }
//     removeItem(item: T) {
//         this.data.splice(this.data.indexOf(item), 1)
//     }
//     getItems() {
//         console.log([...this.data])
//         return [...this.data];
//     }

// }

// const stringStorage = new DataStorage<string>();
// stringStorage.addItem('Pushkar');
// stringStorage.addItem('Kumar');
// stringStorage.removeItem('Kumar');
// stringStorage.getItems();


// /// Partial and general utility type.

// interface Course {
//     title: string,
//     description: string,
//     date: Date,
// }
// // Partial type utility allows us to define course interface as empty
// function getCourse(title: string, description: string, data: Date): Course {
//     let course: Partial<Course> = {};
//     course.title = title;
//     course.description = description;
//     course.date = data
//     // course is of type Partial<Course> hence type cast is used to return
//     // it as course.
//     return course as Course;
// }
// // Readonlt utility type ensures that no update operation is perfomred on it.
// const fixedName: Readonly<string[]> = ['Pushkar', 'kumar'];