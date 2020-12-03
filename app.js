const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const employeeArr = []

//  Renders out the HTML and write's the file
const renderTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFile(outputPath, render(employeeArr), err => {
        if (err) {
            return console.log(err);
        } else {
            console.log("... writing file")
        }
    })
}

//  Uses Inquirer to get the correct parameters for the Engineer
const makeEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is youre name',
            name: 'name'
        },
        {
            type: 'input',
            message: "What is your id?",
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your github?',
            name: 'github'
        }
    ]).then(({ name, id, email, github }) => {
        const engine = new Engineer(name, id, email, github)
        employeeArr.push(engine)
        whatNext()
    })
}

//  Uses Inquirer to get the correct parameters for the Intern
const makeIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is youre name',
            name: 'name'
        },
        {
            type: 'input',
            message: "What is your id?",
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your school?',
            name: 'school'
        }
    ]).then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school)
        employeeArr.push(intern)
        whatNext()
    })
}

//  Uses Inquirer to see what to do after you create an Employee
const whatNext = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like todo?',
            choices: [
                { name: 'Make Engineer', value: "engineer" }, { name: 'Make Intern', value: "intern" }, { name: 'Write File', value: "write" }],
            name: "choice"
        }
    ]).then(({ choice }) => {
        switch (choice) {
            case "engineer":
                makeEngineer()
                break;
            case "intern":
                makeIntern()
                break;
            default:
                renderTeam()
                break;
        }
    })
}

//  The init function
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is youre name',
            name: 'name'
        },
        {
            type: 'input',
            message: "What is your id?",
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'office'
        }
    ]).then(({ name, id, email, office }) => {
        const manage = new Manager(name, id, email, office)
        employeeArr.push(manage)
        whatNext()
    })
}

init()