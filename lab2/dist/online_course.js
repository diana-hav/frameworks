"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineCourse = void 0;
class OnlineCourse {
    constructor(name, hours) {
        this.students = [];
        this.name = name;
        this.hours = hours;
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} has been registered for the course ${this.name}.`);
        }
        else {
            console.log(`${student} is already registered for the course ${this.name}.`);
        }
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
exports.OnlineCourse = OnlineCourse;
//# sourceMappingURL=online_course.js.map