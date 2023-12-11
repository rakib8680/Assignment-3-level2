import { TCourse } from "./course.interface";
import { Course } from "./course.model";




// create a course 
const createCourse = async (payload: TCourse)=>{

    const result = await Course.create(payload);
    return result;
};



export const courseServices = {
    createCourse
}