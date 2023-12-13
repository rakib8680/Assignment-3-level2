import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { categoryServices } from "./category.service";



// create category 
const createCategory = catchAsync(async(req, res)=>{
    const category = req.body;
    const result = await categoryServices.createCategory(category);

    sendResponse(res,{
        success: true,
        statusCode: 201,
        message: 'Category created successfully',
        data: result
    });
});


export const categoryControllers = {
    createCategory
};