"use strict";
//classes
class Department {
    // Sets the default valur for the name when the object is created
    // the private and public initialisers are attricute of class employee.
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        //Protected variables are available to extended classes as well.
        this.employee = [];
        // this.name = n;
        // this
    }
    // Function within the class Department
    // this refers to the method responsible to call it
    // however here this refers to the Department.
    describe() {
        console.log('department' + this.name);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employee);
        console.log(this.employee.length);
    }
    // Static method in a calss
    static creatEmployee(name) {
        return { name: name };
    }
}
// create an object
// Cannot be Instantiated 
// const accounting = new Department('1', 'Accounting');
// accounting.addEmployee('Tom');
// accounting.addEmployee('Max');
// accounting.printEmployeeInfo();
// accounting.describe()
// console.log(accounting)
// creates a copy of accounting object
// const accountingCopy = { name: 'Pushkar', describe: accounting.describe }
// accountingCopy.describe()
////////////////////// Class Basics//////////////
// The class ITDepartment inherits the attributes of 
// the base class Department
class ITDepartment extends Department {
    constructor(id, admins) {
        // Super must be called before assigning 
        // values to any other keyWord
        super(id, 'IT');
        this.admins = admins;
        // Admins is the property exclusive to ITDepartment
        this.admins = admins;
    }
    describeAbstract() {
        console.log('IT DEPRTMENT');
    }
}
const itdepartment = new ITDepartment('1', ['Pushkar']);
itdepartment.addEmployee('Tom');
itdepartment.addEmployee('Max');
itdepartment.printEmployeeInfo();
itdepartment.describe();
console.log(itdepartment);
class AccountingDepartment extends Department {
    // private for a constructor creates singelton
    constructor(id, reports) {
        super(id, 'IT');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    //getter for private variable lastReport
    get mostRecentReport() {
        // if (this.lastReport)
        return this.lastReport;
    }
    // Setter for lastReport variable
    set mostRecentReport(value) {
        this.addReports(value);
    }
    // The addEmployee function overwrites the 
    // addEmployee function of the Department class.
    addEmployee(employee) {
        this.employee.push(employee);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
        console.log(this.employee);
    }
    // Calling absract class of class Department.
    describeAbstract() {
        console.log('Accounting DEPARTMENT');
    }
}
//Accessing the static method of a class
const empl = Department.creatEmployee("pushkar");
console.log(empl);
// Accessing singelton classes.
const accountingDepartment = AccountingDepartment.getInstance();
const accountingDepartment2 = AccountingDepartment.getInstance();
console.log(accountingDepartment, accountingDepartment2);
// const accountingDepartment = AccountingDepartment('1', ['Report1'])
accountingDepartment.addEmployee('Rahul');
accountingDepartment.mostRecentReport = 'Report2';
accountingDepartment.printReports();
console.log(accountingDepartment.mostRecentReport);
