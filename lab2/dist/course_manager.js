"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseManager = void 0;
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
        console.log(`Course ${course.name} has been added.`);
    }
    removeCourse(courseName) {
        this.courses = this.courses.filter(course => course.name !== courseName);
        console.log(`Course ${courseName} has been removed.`);
    }
    findCourse(courseName) {
        return this.courses.find(course => course.name === courseName);
    }
    listCourses() {
        this.courses.forEach(course => {
            console.log(`Course: ${course.name}, Duration: ${course.hours} hours`);
            console.log(`Students: ${course.students.join(', ')}`);
        });
    }
}
exports.CourseManager = CourseManager;
//# sourceMappingURL=course_manager.js.map