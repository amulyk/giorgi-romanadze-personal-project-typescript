import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    GroupsModel,
    GradebooksModel,
} from './school';


(async () => {
    try {
        /*
             SubjectModel & LMSModel starts here
             Version: 1.0.9
         */

        const history = new SubjectsModel({
            title: 'History',
            lessons: 24,
            description: 'Some text'
        });

        const mathe = new SubjectsModel({
            title: 'mathematics',
            lessons: 22,
            description: 'I love math !'
        });

        var historyid = history.id
        console.log(historyid)
        const lms = new LMSModel();
        await lms.add(history);
        await lms.add(mathe);
        await lms.verify(history);
        await lms.remove(history);
        console.log(await lms.readAll());


        /*
            TeachersModel starts here
            Version: 2.8.4
        */

        var teacherObj = {
            "name": {
                "first": 'Giorgi',
                "last": "Romanadze"
            },
            "image": "image",
            "dateOfBirth": "03/03/1970",
            "emails": [{
                "email": "gromanadze@gmail.com",
                "primary": true
            }],
            "phones": [{
                "phone": "555131313",
                "primary": true
            }],
            "sex": "male",
            "subjects": [{
                "subject": "Mathematics"
            }],
            "description": "Test desc",
        };


        var teacherSecondObject = {
            "name": {
                "first": 'Ana',
                "last": "Gogitidze"
            },
            "image": "image",
            "dateOfBirth": "03/02/1980",
            "emails": [{
                "email": "anamaria13@gmail.com",
                "primary": true
            }],
            "phones": [{
                "phone": "555131231",
                "primary": true
            },
            {
                "phone": "555145412",
                "primary": false
            }
            ],
            "sex": "female"
        };

        var obj = {
            "name": {
                "first": 'Niko',
                "last": "Meladze"
            },
            "phones": [{
                "phone": "555141515",
                "primary": false
            },
            {
                "phone": "555181815",
                "primary": true
            }
            ],
        }


        const teacher = new TeachersModel();
        var teacherid = await teacher.add(teacherObj);
        await teacher.update(teacherid, obj)
        await teacher.read(teacherid)
        var teacherid = await teacher.add(teacherObj);
        var result = await teacher.read(teacherid);
        var update = await teacher.update(teacherid, teacherSecondObject);
        result = await teacher.read(teacherid);
        var deletedteacher = await teacher.remove(teacherid);



        /*
            PupilModel starts here
            Version: 1.0.9
        */

        var pupil1 = {
            "name": {
                "first": "Giorgi",
                "last": "Romanadze"
            },
            "image": "string",
            "dateOfBirth": "23/03/1998",
            "phones": [{
                "phone": "555141315",
                "primary": true
            }],
            "sex": 'male',
            "description": "A Good pupil",
        }

        var pupil2 = {
            "name": {
                "first": "Lasha",
                "last": "Romanadze"
            },
            "image": "string",
            "dateOfBirth": "23/03/1990",
            "phones": [{
                "phone": "598785151",
                "primary": true
            }],
            "sex": 'male',
            "description": "Updated Desc",
        }

        const pupils = new PupilsModel();
        var pupilid = await pupils.add(pupil1);
        var result = await pupils.read(pupilid);
        var update = await pupils.update(pupilid, pupil2);
        result = await pupils.read(pupilid);
        var deletedpupils = await pupils.remove(pupilid);



        /*
            GroupsModel starts here
            Version: 1.0.7
        */

        const room = 236;
        const groups = new GroupsModel();
        const groupId = await groups.add(room);
        await groups.addPupil(groupId, pupilid);
        await groups.addPupil(groupId, pupilid);
        await groups.update(groupId, {
            room: 237
        })
        // console.log(await groups.read(groupId))
        await groups.readAll()


        /*
            GradebooksModel starts here
            Version: 1.0.3
        */

        const pupilId = pupilid;
        const teacherId = teacherid;
        const gradebooks = new GradebooksModel(groups, teacher, lms);
        const level = 1;
        const gradebookId = await gradebooks.add(level, groupId);
        await gradebooks.clear();
        //    console.log(gradebookId)


        /*
            TeachersModels starts here
            Version: 1.0.9
        */

        const teacherrecord = new TeachersModel();
        var teacheridrecord = await teacher.add(teacherObj);
        const record = {
            pupilId: pupilId,
            teacherId: teacheridrecord,
            subjectId: history.id,
            lesson: 1,
            mark: 9
        };

        let recordOut = await gradebooks.addRecord(gradebookId, record);
        const students = await gradebooks.readAll(gradebookId);
    }

    catch (err) {
        console.log(err)
    }

})();