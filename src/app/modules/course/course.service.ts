import {filterFunction } from "../../helpers/filterHelper";
import { TCourse } from "./course.interface";
import { Course } from "./course.model";




// create a course 
const createCourse = async (payload: TCourse)=>{

    const result = await Course.create(payload);
    return result;
};





// get all course 
const getAllCourse = async (query: Record <string, unknown>)=>{





    const result = await filterFunction(Course.find(),query);
    return result;
}





export const courseServices = {
    createCourse,
    getAllCourse
}
