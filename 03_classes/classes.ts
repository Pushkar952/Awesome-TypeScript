//classes

abstract class Department {
    // private readonly id: string;
    // private name: string;
    //Protected variables are available to extended classes as well.
    protected employee: string[] = [];
    // Sets the default valur for the name when the object is created
    // the private and public initialisers are attricute of class employee.
    constructor(private readonly id: string, public name: string) {
        // this.name = n;
        // this
    }
    // Function within the class Department
    // this refers to the method responsible to call it
    // however here this refers to the Department.
    describe(this: Department) {
        console.log('department' + this.name)
    }
    abstract describeAbstract(this: Department): void;


    addEmployee(employee: string) {
        this.employee.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employee);
        console.log(this.employee.length);
    }
    // Static method in a calss
    static creatEmployee(name: string) {
        return { name: name }
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
    constructor(id: string, public admins: string[]) {
        // Super must be called before assigning 
        // values to any other keyWord
        super(id, 'IT');
        // Admins is the property exclusive to ITDepartment
        this.admins = admins;
    }
    describeAbstract() {
        console.log('IT DEPRTMENT')
    }

}
const itdepartment = new ITDepartment('1', ['Pushkar'])
itdepartment.addEmployee('Tom');
itdepartment.addEmployee('Max');
itdepartment.printEmployeeInfo();
itdepartment.describe()
console.log(itdepartment)

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

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
    set mostRecentReport(value: string) {
        this.addReports(value);

    }
    // private for a constructor creates singelton
    private constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }
    // The addEmployee function overwrites the 
    // addEmployee function of the Department class.
    addEmployee(employee: string) {
        this.employee.push(employee);
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
        console.log(this.employee)
    }
    // Calling absract class of class Department.
    describeAbstract() {
        console.log('Accounting DEPARTMENT')
    }
}
//Accessing the static method of a class
const empl = Department.creatEmployee("pushkar");

console.log(empl);
// Accessing singelton classes.
const accountingDepartment = AccountingDepartment.getInstance();
const accountingDepartment2 = AccountingDepartment.getInstance();

console.log(accountingDepartment, accountingDepartment2)

// const accountingDepartment = AccountingDepartment('1', ['Report1'])
accountingDepartment.addEmployee('Rahul')
accountingDepartment.mostRecentReport = 'Report2'
accountingDepartment.printReports();
console.log(accountingDepartment.mostRecentReport);