"use server"

import { createWriteStream } from "fs"
import { InputCourse, addCourse, updateCourse } from "../api"
import { redirect } from "next/navigation"

export const handleAdd = async (data:FormData)=>{
    const photo = data.get('cover') as File
    if(photo){
        let extension = photo.type.split("/").at(-1)
        const fileName =  Date.now() + "." + extension
        const stream = createWriteStream("public/images/" + fileName)
        const bufferedImage =  await photo.arrayBuffer()
        stream.write(Buffer.from(bufferedImage))
        let course:InputCourse = {
            name: data.get('name') as string,
            price: +(data.get('price') as string),
            duration: +(data.get('duration') as string),
            cover: '/images/' + fileName

        }
        addCourse(course)
        redirect("/")
    }
}

export const handleEdit = async (data:FormData)=>{

    // const photo = data.get('cover') as File
    // if(photo){
    //     let extension = photo.type.split("/").at(-1)
    //     const fileName =  Date.now() + "." + extension
    //     const stream = createWriteStream("public/images/" + fileName)
    //     const bufferedImage =  await photo.arrayBuffer()
    //     stream.write(Buffer.from(bufferedImage))
    //     let updatedCourse:ICourse = {
    //         name: data.get('name') as string,
    //         price: +(data.get('price') as string),
    //         duration: +(data.get('duration') as string),
    //         cover: '/images/' + fileName

    //     }
    //     updateCourse(updatedCourse)
    //     redirect("/courses")
    // }
    console.log("should be processed here:course-actions.ts");
    
}
