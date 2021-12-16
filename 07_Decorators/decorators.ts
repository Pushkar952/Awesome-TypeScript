// Decorator factory
function Logger(loggerString: string) {
    return function(constructor: Function) {
        console.log(loggerString)
        console.log(constructor);
    };
}
// decorator with generates html element that is called on instantiation of the the class
// it extends to
function WithTemplate(template: string, hookId: string) {
    return function <T extends { new(...args: any[]): { name: string } }>(originalconstructor: T) {
        return class extends originalconstructor {
            constructor(..._: any[]) {
                super();
                const hookElement = document.getElementById(hookId);
                // const p = new originalconstructor();
                if (hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector('h1')!.textContent = this.name;
                }
            }

        }

    }
}


//decorators
@Logger('Logging person obj')
@WithTemplate('<h1> My name is Pushkar</h1>', 'app')
class PersonObj {
    name = 'Pushkar';

    constructor() {
        console.log(`created a person object`);
    }
}
const per = new PersonObj();
console.log(per);


// Decorator does not depend on instatiation but
// rather they execute when they are define
//Property Decorator
function Log(target: any, property: string | symbol) {
    console.log('Property decorator');
    console.log(target, property);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string, position: number) {
    console.log('Param decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
// ----
class Product {
    // Property Decorator
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(p: number) {
        if (p > 0) {
            this._price = p;
        }
    }

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }
    @Log3
    getPriceWithTax(@Log4
    tax: number) {
        return this._price * (1 + tax);
    }
}


function AutoBind(_: any, __: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const updatedescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;

        }
    };
    return updatedescriptor;

}

class Printer {
    message = 'This works!!'
    @AutoBind
    showMesage() {
        console.log(this.message);
    }
}
const p = new Printer();

const button1 = document.querySelector('button')!;
button ?.addEventListener('click', p.showMesage);


interface ValidatorConfig {
    [property: string]: {
        [validatableProperty: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {};

function Require(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    }
}

function Positive(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

function validate(obj: any) {
    const objectValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objectValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objectValidatorConfig) {
        for (const validator of objectValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;

            }

        }
    }
    return isValid;
}
class Course {
    @Require
    title: string;
    @Positive
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form');
courseForm ?.addEventListener('submit', event => {

    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;
    const title = titleEl.value;
    const price = +priceEl.value;
    const newCourse = new Course(title, price);
    if (validate(newCourse)) {
        console.log(newCourse);
    }
    else {
        alert('Invalid input');
        return;
    }

});
