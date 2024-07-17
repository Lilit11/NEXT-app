import { ICourse, getCourseById } from "@/app/lib/api"
import { Editor } from "@/app/lib/components/editor"
import { notFound } from "next/navigation"
import { useFormState } from "react-dom"

interface IProps{
    params:{id:number}
}

export default function Page(props:IProps){

    const foundCourse = getCourseById(props.params.id)
   
    if(!foundCourse){
        return notFound()
    }

    return <div>
        <Editor foundCourse ={foundCourse}/>
    </div>
}