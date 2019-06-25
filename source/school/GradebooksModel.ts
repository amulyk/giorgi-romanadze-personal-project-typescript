import {
    validate
} from './validate';


export class GradebooksModel {

    constructor(groups, teachers, lms) {
        this.obj = {}
        this.gradebook = new Map();
        this.arr = [];
        this.teachers = teachers;
        this.lms = lms;
        this.groups = groups;
        this.id = "";
    }

    async add(level, groupId) {
        if (typeof level !== 'number' || typeof groupId !== 'number') {
            throw new Error("Oops,here is some problem. This item must be a number !")
        }
        else {
            let obj = {};
            obj.id = this.id = Math.ceil(Math.random() * 100000000000);
            obj.level = level;
            obj.groupid = groupId;
            this.gradebook.set(this.id, obj);
            return obj;
        }
    }

    async clear() {
        return delete this.gradebook;
        // console.log(this.gradebook)
    }

    async addRecord(gradebookId, record) {
        // console.log(gradebookId, record)
        if (typeof gradebookId !== 'undefined' || typeof gradebookId !== 'number') {
            throw new Error("Ooops,here is some problem...")
        }

        else {
            let name = "";
            let tmp = this.groups.pupils
            for (let i = 0; i < tmp.size; i++) {
                if (tmp.pupil.id == record.pupilId) {
                    name = `${tmp[i].pupil.name.first} ${tmp[i].pupil.name.last}`;
                }
            }
            let teacherId = record.teacherId;
            let subjectId = record.subjectId;
            let lesson = record.lesson;
            let mark = record.mark;
            let teacher = `${this.teachers.teachers.get(teacherId).name.first} ${this.teachers.teachers.get(teacherId).name.last}`;
            let subject = this.lms.lms
            subject = Array.from(subject)
            subject = subject[0].title
            let obj = {
                name,
                records: [{ teacher, subject, lesson, mark }]
            };

            let finalobj = { gradebookid: gradebookId, record: obj, idpupil: record.pupilId };
            this.mainbook.push(finalobj);
        }
    }


    async read(first, second) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].gradebookid == first && this.arr[i].idpupil == second) {
                return this.arr[i].record;
            }
        }
    }

    async readAll(id) {

        if (typeof id !== 'number') {
            throw new Error("Ooops,here is some problem...")
        }

        else {
            let result = [];
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i].gradebookid == id) {
                    result.push(this.arr[i].record);
                }
            }
            return result;
        }
    }
}
