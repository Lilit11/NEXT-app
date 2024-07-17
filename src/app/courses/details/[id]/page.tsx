import { getCourseById } from "@/app/lib/api"
import Image from "next/image"
import { notFound } from "next/navigation"

interface IProps{
    params:{id: number}
}


export default function Page(props: IProps){

   const foundCourse = getCourseById(props.params.id)

    if(!foundCourse){
        return notFound()
    }

    return<>
    <div className="box has-text-centered">
           <Image 
           src ={foundCourse.cover}
           width={150}
           height={150}
           alt="cover photo"/>
           <p>{foundCourse.name} </p> 
           <p> Price {foundCourse.price} AMD </p> 
           <p>Duration {foundCourse.duration} months</p> 
        </div>
   
    </>
}