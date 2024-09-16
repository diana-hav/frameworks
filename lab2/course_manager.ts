import { Course } from "./course";

export class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Course ${course.name} has been added.`);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(course => course.name !== courseName);
        console.log(`Course ${courseName} has been removed.`);
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.name === courseName);
    }

    listCourses(): void {
        this.courses.forEach(course => {
            console.log(`Course: ${course.name}, Duration: ${course.hours} hours`);
            console.log(`Students: ${course.students.join(', ')}`);
        });
    }
}
