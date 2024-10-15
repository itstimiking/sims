const fs = require('fs');
const fsPromises =require('fs/promises')
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'students.json');

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
    getById: (id: string) => students.find(x=> x.id == id),
    find: (id: string) => students.find(x=> x.id == id ),
    getAll: ()=>require('./students.json'),
    create,
    update,
    delete: _delete
};

async function create(student: Student) {
    let id = students.length ? Math.max(...students.map(x => parseInt(x.id)))+ + 1 : 1;
    student.id = id.toString()
    student.createdAt = new Date().toISOString();
    student.updatedAt = new Date().toISOString();
    students.push(student);
    return {error:false, data:student}
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
        const data = students.filter(x => x.id.toString() !== id.toString());
        await saveData();
    }else{
        return {error:true,message:'Student not found'}
    }
}

async function saveData() {
    fs.writeFileSync('./students.json', JSON.stringify(students,null,4));
    // await fsPromises.writeFile(dataFilePath, JSON.stringify(students));
}