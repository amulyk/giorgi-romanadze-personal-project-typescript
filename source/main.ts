import {
    GroupsModel,
    GradebooksModel,
    LMSModel,
    PupilsModel,
    SubjectsModel,
    TeachersModel,
} from "./school/index";
(async () => {
    try {
        /*
             SubjectModel & LMSModel starts here
             Version: 1.0.9
         */

        const history = new SubjectsModel({
            description: "Some text",
            lessons: 24,
            title: "History",
        });

        const mathe = new SubjectsModel({
            description: "I love math !",
            lessons: 22,
            title: "mathematics",
        });

        const historyid = history.id;
        console.log(historyid);
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

        const teacherObj = {
            dateOfBirth: "19-12-1997",
            description: "A Good teacher",
            emails: [
                {
                    email: "giushkki@gmail.com",
                    primary: true,
                },
            ],
            image: "image",
            name: {
                first: "Giorgi",
                last: "Romanadze",
            },
            phones: [
                {
                    phone: "555506089",
                    primary: true,
                },
            ],
            sex: "male",
            subjects: [
                {
                    subject: "Math",
                },
            ],
        };

        const teacherSecondObject = {
            dateOfBirth: "03/02/1980",
            emails: [{
                email: "anamaria13@gmail.com",
                primary: true,
            }],
            image: "image",
            name: {
                first: "Ana",
                last: "Gogitidze",
            },
            phones: [{
                phone: "555131231",
                primary: true,
            },
            {
                phone: "555145412",
                primary: false,
            },
            ],
            sex: "female",
        };

        const obj = {
            name: {
                first: "Niko",
                last: "Meladze",
            },
            phones: [{
                phone: "555141515",
                primary: false,
            },
            {
                phone: "555181815",
                primary: true,
            },
            ],
        };

        const teacher = new TeachersModel();
        let teacherid = await teacher.add(teacherObj);
        await teacher.update(teacherid, obj);
        await teacher.read(teacherid);
        teacherid = await teacher.add(teacherObj);
        let resultTeacher = await teacher.read(teacherid);
        const updateTeacher = await teacher.update(teacherid, teacherSecondObject);
        resultTeacher = await teacher.read(teacherid);
        const deletedteacher = await teacher.remove(teacherid);

        /*
            PupilModel starts here
            Version: 1.0.9
        */

        const pupil1 = {
            dateOfBirth: "23/03/1998",
            description: "A Good pupil",
            image: "string",
            name: {
                first: "Giorgi",
                last: "Romanadze",
            },
            phones: [{
                phone: "555141315",
                primary: true,
            }],
            sex: "male",
        };

        const pupil2 = {
            dateOfBirth: "23/03/1990",
            description: "Updated Desc",
            image: "string",
            name: {
                first: "Lasha",
                last: "Romanadze",
            },
            phones: [{
                phone: "598785151",
                primary: true,
            }],
            sex: "male",
        };

        const pupils = new PupilsModel();
        const pupilid = await pupils.add(pupil1);
        let result = await pupils.read(pupilid);
        const update = await pupils.update(pupilid, pupil2);
        result = await pupils.read(pupilid);
        const deletedpupils = await pupils.remove(pupilid);

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
            room: 237,
        });
        // console.log(await groups.read(groupId))
        await groups.readAll();

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
        const teacheridrecord = await teacher.add(teacherObj);
        const record = {
            lesson: 1,
            mark: 9,
            pupilId,
            subjectId: history.id,
            teacherId: teacheridrecord,
        };
        const recordOut = await gradebooks.addRecord(gradebookId, record);
        const students = await gradebooks.readAll(gradebookId);
    } catch (err) {
        console.log(err);
    }
})();
