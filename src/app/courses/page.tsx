import Image from "next/image";
import { getAllCourses } from "../lib/api";
import Link from "next/link";

export default  function Page(){
    const items = getAllCourses()

    return (
    <div  className="columns is-multiline">
        {items.map(course => <div key={course.id} className="column is-one-quarter">
        <div className="box has-text-centered">
           <Image 
           src ={course.cover}
           width={150}
           height={150}
           alt="cover photo"/>
           <p>{course.name} </p> 
           <Link href={`/courses/details/${course.id}`}>details  </Link>
           <Link href={`/courses/edit/${course.id}`}>  edit</Link>
        </div>
        </div>  )}
    </div>
    )
}