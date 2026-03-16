interface Employee {
    id: number;
    name: string;
    salary: number;

    displayInfo(): void;
}

class EmployeeDetails implements Employee {

    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    displayInfo(): void {
        console.log("Employee ID:", this.id);
        console.log("Employee Name:", this.name);
        console.log("Employee Salary:", this.salary);
    }
}

let emp1 = new EmployeeDetails(101, "Ali Hassan", 50000);
emp1.displayInfo();