import { queryFunction } from "../../helpers/queryFunction";
import { TCourse } from "./course.interface";
import { Course } from "./course.model";




// create a course 
const createCourse = async (payload: TCourse)=>{

    const result = await Course.create(payload);
    return result;
};





// get all course 
const getAllCourse = async (query: Record <string, unknown>):Promise<TCourse[]>=>{

    const result = await queryFunction(Course.find(), query);
    return result;
}





export const courseServices = {
    createCourse,
    getAllCourse
}
