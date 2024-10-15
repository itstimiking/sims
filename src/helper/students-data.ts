const fs = require('fs');

type Student = {
    id: string
    name: string
    major: string
    registrationNumber: string
    dob: string
    gpa: number
    createdAt?: string
    updatedAt?: string
}

let students: Student[] = require('./students.json');

export const studentsDb = {
    getAll: () => students,
    getById: (id: string) => students.find(x=> x.id.toString() === id ),
    find: (id: string) => students.find(x=> x.id.toString() === id ),
    create,
    update,
    delete: _delete
};

async function create(student: Student) {
    student.id = students.length ? (Math.max(...students.map(x => parseInt(x.id))) + 1).toString() : '1';

    student.createdAt = new Date().toISOString();
    student.updatedAt = new Date().toISOString();
    students.push(student);
    try{
        await saveData();
        return {error:false, data:student}
    }catch(err){
        console.log(err,":::: error creating student :::::")
        return {error:true}
    }
}

async function update(id:number, params:Student) {
    const student: Student | undefined = students.find(x => x.id.toString() === id.toString());
    if(student){
        student.updatedAt = new Date().toISOString();

        Object.assign(student, params);
        await saveData();
        return Object.assign(student, params)
    }else{
        return {error:true,message:'Student not found'}
    }
}

async function _delete(id:string) {
    const student = studentsDb.find(id)
    if(student){
        students = students.filter(x => x.id.toString() !== id.toString());
        await saveData();
    }else{
        return {error:true,message:'Student not found'}
    }
}

async function saveData() {
    fs.writeFileSync('students.json', JSON.stringify(students, null, 4));
}