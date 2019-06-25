import {
    validate
} from './validate';
export class LMSModel {
    ele: Set<any>;
    constructor() {
        this.ele = new Set();
    }

    async add(parameter: any) {
        if (typeof parameter !== 'object') {
            throw new Error("You must pass the object as parameter !")
        }
        return this.ele.add(parameter.subject);
    }

    async verify(parameter: any) {
        if (typeof parameter !== 'object') {
            throw new Error("You must pass the object as parameter !")
        }
        return this.ele.has(parameter.subject);
    }

    async remove(parameter: any) {

        if (typeof parameter !== 'object') {
            throw new Error("You must pass the object as parameter !")
        }
        if (this.ele.has(parameter.subject)) {
            this.ele.delete(parameter.subject);
        }
    }

    async readAll() {
        return [...this.ele]
    }
}