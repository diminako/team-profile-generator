// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = function () {
    this.school = "UCLA"
    this.getSchool = () => this.school
    this.getRole = () => "Intern"
}

module.exports = Intern;