import { Pupils } from "./interfaces/pupil";

export class PupilsModel {

    pupils: Map<number, any>;

    constructor() {
        this.pupils = new Map();
    }
    async add(pupil: Pupils) {
        if (typeof pupil !== 'object') {
            throw new Error("Pass the object parameter !")
        }
        else {
            let id = Math.ceil(Math.random() * 100000000000);
            this.pupils.set(id, pupil);
            return id;
        }
    }


    async read(id: number) {
        if (typeof id !== 'number' || this.pupils.get(id) == 'undefined')
            throw new TypeError('Oops,here is some problem.We can not read this item !')
        else {
            var pupils = this.pupils.get(id);
            var obj = {
                id,
                ...pupils
            }
            return (obj);
        }
    }

    async update(currentID: number, obj: any) {
        if (this.pupils.get(currentID) == null)
            throw new TypeError('Oops,here is some problem.We can not update this item !');
        else {
            // Update coming soon
        }
    }

    async remove(id: number) {
        if (this.pupils.get(id) == null)
            throw new TypeError('Oops,here is some problem.We can not find this id !');
        else {
            this.pupils.delete(id);
            return this.pupils.delete(id)
        }
    }
}