import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { courseServices } from "./course.service";



// create course 
const createCourse = catchAsync(async (req, res) => {
    const courseData = req.body;
    const result = await courseServices.createCourse(courseData);

    sendResponse(res,{
        success: true,
        statusCode: 201,
        message: 'Course created successfully',
        data: result
    });
});


// get all course 
const getAllCourse = catchAsync(async (req,res)=>{
    const result = await courseServices.getAllCourse(req.query);

      sendResponse(res,{
        success: true,
        statusCode: 200,
        message: 'Courses retrieved successfully',
        data: result
    });
});


// update course 
const updateCourse = catchAsync(async(req,res)=>{
    const {courseId} = req.params;
    const result = await courseServices.updateCourse(req.body,courseId)

    sendResponse(res,{
        success: true,
        statusCode: 200,
        message: 'Course updated successfully',
        data: result
    });
})





export const courseControllers = {
    createCourse,
    getAllCourse,
    updateCourse
}