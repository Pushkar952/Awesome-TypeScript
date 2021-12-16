
interface Name {
    name: string;
}

interface Greet extends Name {
    greet(text: string): void;
}

class Person implements Greet {
    name: string;
    constructor(n: string) {
        this.name = n;
    }

    greet(text: string) {
        console.log(text);
    }
}

let user1: Greet;
user1 = new Person('Ruchika')
user1.greet("sdsdsds")


interface Employee {
    name: string;
    startDate: Date;
}

interface Admin {
    name: string;
    priviliges: string[]
}

interface OrgEmployee extends Admin, Employee { }

const e1: OrgEmployee = {
    name: "Ruchika",
    startDate: new Date(),
    priviliges: ['server_access']
}

type Numeric = number | string;
type CustomType = string | boolean;

function addNumbers(a: Numeric, b: Numeric) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printUnknowEmployee(e1: UnknownEmployee) {

    console.log(e1.name)

    if ('priviliges' in e1) {
        console.log(e1.priviliges)
    }
    if ('startDate' in e1) {
        console.log(e1.startDate)
    }

}

class Car {
    drive() {
        console.log(`Driving a car`);
    }
}
class Truck {
    drive() {
        console.log(`Driving a truck`)
    }

    loadMaterial() {
        console.log(`loading material on truck`)
    }
}
type Vehicle = Car | Truck;

function useVehicle(v: Vehicle) {
    v.drive();
    if (v instanceof Truck) {
        v.loadMaterial();
    }
}