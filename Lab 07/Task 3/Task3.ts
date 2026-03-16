interface Student {
    id: number;
    name: string;
    course: string;
}

let student = {} as Student;

student.id = 1;
student.name = "Ayesha Khan";
student.course = "TypeScript";

console.log(student);