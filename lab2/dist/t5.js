"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const online_course_1 = require("./online_course");
const course_manager_1 = require("./course_manager");
const course1 = new online_course_1.OnlineCourse('JavaScript Basics', 30);
const course2 = new online_course_1.OnlineCourse('Advanced TypeScript', 40);
course1.registerStudent('Alice');
course1.registerStudent('Bob');
course2.registerStudent('Charlie');
course2.registerStudent('Alice');
const courseManager = new course_manager_1.CourseManager();
courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.listCourses();
courseManager.removeCourse('JavaScript Basics');
courseManager.listCourses();
//# sourceMappingURL=t5.js.map