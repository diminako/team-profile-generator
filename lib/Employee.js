// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

//  Created the Employee Class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //  Methods that will get passed onto Employees created from Employee
    getName() { return this.name }
    getId() { return this.id }
    getEmail() { return this.email }
    getRole() { return "Employee" }
}

module.exports = Employee;