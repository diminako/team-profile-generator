// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

const Employee = function (name, id, email, role) {
    this.name = "name";
    this.id = "id";
    this.email = "email";
}

Employee.prototype.getName = function () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is youre name',
            name: 'name'
        }]).then(data => {
            this.name = name;
        })
}

Employee.prototype.getId = function () {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your id?",
            name: 'id'
        }]).then(data => {
            this.id = id;
        })
}


Employee.prototype.getEmail = function () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }]).then(data => {
            this.email = email;
        })
}

Employee.prototype.getRole = function () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is your role?',
            choices: ["Intern", "Engineer", "Manager"]
        }]).then(data => {
            this.role = choices;
        })
}

module.exports = Employee;