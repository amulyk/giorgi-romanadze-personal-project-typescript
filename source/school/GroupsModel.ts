import { Groups } from "./interfaces/group";

export class GroupsModel {
    pupils: Map<number, any>;
    list: Map<any, any>;
    
    constructor() {
        this.list = new Map();
        this.pupils = new Map();
    }

    async add(room: number, level = 1) {
        if (typeof room == 'undefined')
            throw new Error('Oops,here is some problem.We can not add this item !')
        else {
            const id = Math.ceil(Math.random() * 100000);
            var pupils = this.pupils;
            let newList =
            {
                id,
                room,
                level,
                pupils
            }
            this.list.set(id, pupils);
            return id;
        }
    }

    async addPupil(groupID: number, pupilID: Groups) {
        this.pupils.set(groupID, pupilID);
        var pupils = this.pupils;
        var room = this.list.get(groupID).room;
        var level = this.list.get(groupID).level;
        let group = {
            groupID,
            room,
            level,
            pupils
        };
        let oldData = this.list.get(groupID);
        this.list.set(groupID, { ...oldData, ...group });
        return "Added new item !!!"
    }


    async removePupil(groupID: number, pupilID: number) {
        if (typeof this.list.get(groupID) == 'undefined')
            throw new Error("Oops,here is some problem.We can not update this item !")
        else {
            return this.list.delete(pupilID);
        }
    }

    async read(groupID: number) {
        if (typeof this.list.get(groupID) !== 'undefined') {
            var room = this.list.get(groupID).room;
            var group = {
                groupID, room
            }
            return group;

        }
        else {
            throw new Error('Oops,here is some problem.We can not read this item !');
        }
    }

    async update(id: number, ele: any) {

        if (this.list.get(id) == null) {
            throw new Error('Oops,here is some problem.We can not update this item !');
        }
        else {
            let current = this.list.get(id);
            this.list.set(id, { ...current, ...ele });
            return id;
        }

    }

    
    readAll() {
        var list = [...this.list]
        return list;
    }

}