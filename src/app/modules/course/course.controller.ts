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