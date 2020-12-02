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
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

