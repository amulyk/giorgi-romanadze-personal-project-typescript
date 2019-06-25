import { Subject } from "./interfaces/subject";

export class SubjectsModel {
    id: number;
    subject: { title: string; lessons: string; description: string; };
    constructor(subject: any) {
        this.id = Math.ceil(Math.random() * 100000000000);
        var title = subject.title;
        var lessons = subject.lessons;
        var description = subject.description
        this.subject = {
            title,
            lessons,
            description
        }
    }

}