var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    EmployeeDetails.prototype.displayInfo = function () {
        console.log("Employee ID:", this.id);
        console.log("Employee Name:", this.name);
        console.log("Employee Salary:", this.salary);
    };
    return EmployeeDetails;
}());
var emp1 = new EmployeeDetails(101, "Ali Hassan", 50000);
emp1.displayInfo();
