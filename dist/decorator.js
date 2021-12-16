"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorator factory
function Logger(loggerString) {
    return function (constructor) {
        console.log(loggerString);
        console.log(constructor);
    };
}
// decorator with generates html element that is called on instantiation of the the class
// it extends to
function WithTemplate(template, hookId) {
    return function (originalconstructor) {
        return class extends originalconstructor {
            constructor(..._) {
                super();
                const hookElement = document.getElementById(hookId);
                // const p = new originalconstructor();
                if (hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
//decorators
let PersonObj = class PersonObj {
    constructor() {
        this.name = 'Pushkar';
        console.log(`created a person object`);
    }
};
PersonObj = __decorate([
    Logger('Logging person obj'),
    WithTemplate('<h1> My name is Pushkar</h1>', 'app')
], PersonObj);
const per = new PersonObj();
console.log(per);
// Decorator does not depend on instatiation but
// rather they execute when they are define
//Property Decorator
function Log(target, property) {
    console.log('Property decorator');
    console.log(target, property);
}
function Log2(target, name, descriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Param decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
// ----
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(p) {
        if (p > 0) {
            this._price = p;
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
function AutoBind(_, __, descriptor) {
    const originalMethod = descriptor.value;
    const updatedescriptor = {
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
    constructor() {
        this.message = 'This works!!';
    }
    showMesage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMesage", null);
const p = new Printer();
const button1 = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', p.showMesage);
const registeredValidators = {};
function Require(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['required'] });
}
function Positive(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['positive'] });
}
function validate(obj) {
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
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Require
], Course.prototype, "title", void 0);
__decorate([
    Positive
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm === null || courseForm === void 0 ? void 0 : courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
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
