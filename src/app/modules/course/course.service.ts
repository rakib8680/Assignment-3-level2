import { TCourse } from "./course.interface";
import { Course } from "./course.model";




// create a course 
const createCourse = async (payload: TCourse)=>{

    const result = await Course.create(payload);
    return result;
};


// get all course 
const getAllCourse = async ()=>{
    const result = await Course.find();
    return result;
}





export const courseServices = {
    createCourse,
    getAllCourse
}
