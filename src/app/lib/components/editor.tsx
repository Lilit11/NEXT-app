"use client"

import { ICourse, updateCourse } from "../api";
import { ChangeEvent, FormEvent, useState } from "react"
import { ImagePicker } from "@/app/lib/components/image-picker"
import Image from "next/image";
import { handleEdit } from "../actions/course-actions";
interface IProps{
    foundCourse:ICourse
}

export const Editor =(props:IProps)=>{


const [formInfo, setFormInfo] = useState({
    id: props.foundCourse.id,
    name:props.foundCourse.name,
    duration: props.foundCourse.duration,
    price: props.foundCourse.price,
    cover:props.foundCourse.cover
})

const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{

    const { name, value } = e.target;
    setFormInfo({...formInfo, [name]:value} )

}


    return   <div>  <h1 className="is-size-5">Edit Course</h1>
    <div className="columns">
        <div className="is-two-fifth my-4">
        <form  className="box" action={handleEdit}>
            <div className=" field my-4">
                <input
                type="text"
                value={formInfo.name}
                className="input is-primary"
                name="name"
                onChange={handleChange}
                />

            </div>
            <div className=" field my-4">
                <input
                type="text"
                value={formInfo.duration}
                className="input is-primary"
                name="duration"
                onChange={handleChange}
                />

            </div>
            <div className=" field my-4">
                <input
                type="text"
                value={formInfo.price}
                className="input is-primary"
                name="price"
                onChange={handleChange}
                />

            </div>
            <div className="field my-4">
                <Image src={formInfo.cover} alt="cover photo" width={150} height={150}/>
                    <ImagePicker/>
                </div>
                <div className="field my-4">
                    <button className="button is-danger">submit</button>
                </div>
        
        </form>

        </div>
    </div>
    </div> 
}