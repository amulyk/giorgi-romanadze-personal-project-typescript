import { Teacher } from "./interfaces/teacher";

export class TeachersModel {
  teachers: Map<any, Teacher>;
  constructor() {
    this.teachers = new Map();
  }

  async add(teacher: Teacher) {
    let id = Math.ceil(Math.random() * 100000000000);
    this.teachers.set(id, teacher);
    return id;
  }

  async read(id: number) {
    if (typeof this.teachers.get(id) == 'undefined')
      throw new Error('Oops,here is some problem. Please enter correct id.')
    else {
      var teacher = this.teachers.get(id);
      var obj = { id, ...teacher };
      return obj;
    }
  }
  
  async remove(id: number) {
    if (this.teachers.get(id) == null)
      throw new Error('Oops,here is some problem.We can not remove this item !');
    else {
      return this.teachers.delete(id);
    }
  }
}
