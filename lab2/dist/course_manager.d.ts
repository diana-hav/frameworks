import { Course } from "./course";
export declare class CourseManager {
    private courses;
    addCourse(course: Course): void;
    removeCourse(courseName: string): void;
    findCourse(courseName: string): Course | undefined;
    listCourses(): void;
}
//# sourceMappingURL=course_manager.d.ts.map