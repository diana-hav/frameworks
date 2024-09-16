import { OnlineCourse } from "./online_course";
import { CourseManager } from "./course_manager";

const course1 = new OnlineCourse('JavaScript Basics', 30);
const course2 = new OnlineCourse('Advanced TypeScript', 40);

course1.registerStudent('Alice');
course1.registerStudent('Bob');
course2.registerStudent('Charlie');
course2.registerStudent('Alice'); 

const courseManager = new CourseManager();

courseManager.addCourse(course1);
courseManager.addCourse(course2);

courseManager.listCourses();

courseManager.removeCourse('JavaScript Basics');

courseManager.listCourses();
