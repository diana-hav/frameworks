import { Course } from "./course";

export class OnlineCourse implements Course {
    name: string;
    hours: number;
    students: string[] = [];

    constructor (name: string, hours: number) {
        this.name= name;
        this.hours = hours;    
    }

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} has been registered for the course ${this.name}.`);
        } else {
            console.log(`${student} is already registered for the course ${this.name}.`);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}
