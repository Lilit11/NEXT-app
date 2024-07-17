import Database from 'better-sqlite3'

export interface ICourse{
    id:number
    name:string
    price: number
    cover:string
    duration:number
}

export type InputCourse = Omit<ICourse, 'id'>

const db = new Database('courses.db')

export const addCourse = (course:InputCourse)=>{
    db.prepare(`
    INSERT INTO courses(name, price, cover, duration)
    VALUES(@name, @price, @cover, @duration)
    `).run(course)
    
}
export const getAllCourses = ():ICourse[]=>{
    return db.prepare(`
    SELECT * FROM courses
    `).all() as ICourse[]
}

export const getCourseById = (id:number):ICourse=>{

    return db.prepare(`
    SELECT * FROM courses
    WHERE id=${id}
    `).get() as ICourse
}

export const updateCourse =(course:ICourse) =>{
    db.exec(`
    UPDATE courses
    SET name = ${course.name}, price = ${course.price}, cover = ${course.cover}, duration = ${course.duration}
    WHERE id =${course.id}
    `)
}
