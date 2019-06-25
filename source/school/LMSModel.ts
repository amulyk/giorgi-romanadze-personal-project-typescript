import {
    validate
} from './validate';
export class LMSModel {
    constructor() {
        this.ele = new Set();
    }

    async add(parameter) {
        return this.ele.add(parameter.subject);
    }

    async verify(parameter) {
        return this.ele.has(parameter.subject);
    }

    async remove(parameter) {

        if (parameter == 'undefined') {
            throw new Error('Ooops,here is some problem...');
        }
        if (this.ele.has(parameter.subject)) {
            this.ele.delete(parameter.subject);
        }
    }

    async readAll() {
        return [...this.ele]
    }
}