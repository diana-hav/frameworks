import { Course } from "./course";
export declare class OnlineCourse implements Course {
    name: string;
    hours: number;
    students: string[];
    constructor(name: string, hours: number);
    registerStudent(student: string): void;
    isStudentRegistered(student: string): boolean;
}
//# sourceMappingURL=online_course.d.ts.map