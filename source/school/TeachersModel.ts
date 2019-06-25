import { validate } from './validate';

export class TeachersModel {
  teachers: Map<any, any>;
  schema: { "name": { "first": string; "last": string; }; "image": string; "dateOfBirth": string; "emails": { "email": string; "primary": string; }[]; "phones": { "phone": string; "primary": string; }[]; "sex": string; "subjects": { "subject": string; }[]; "description": string; };

  constructor() {
    this.teachers = new Map();
  }

  async add(teacher: any) {
    if (validate(this.schema, teacher)) {
      let id = Math.ceil(Math.random() * 100000000000);
      this.teachers.set(id, teacher);
      return id;
    }
    else throw new Error('Oops,here is some problem...')
  }

  async read(id: number) {
    if (typeof this.teachers.get(id) == 'undefined')
      throw new Error('Oops,here is some problem. Please enter correct id.')
    else {
      var teacher = this.teachers.get(id);
      var obj = { id, ...teacher }
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

  async update(currentID : number, obj: any) {
    if (this.teachers.get(currentID) == null)
      throw new Error('Oops,here is some problem.We can not update this item !');
    else {
      // Update Code,coming soon.
    }
  }


}


