/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { handleZodError } from "../errors/handleZodErrors";
import { TErrorResponse } from "../types/TErrorResponse";


export const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

    let errorResponse : TErrorResponse = {
        success : false,
        message : 'Error',
        errorMessage : 'Something Went Wrong'
    };

    if(err instanceof ZodError){
       errorResponse =  handleZodError(err)
    }else if(err.name === 'ValidationError'){
        
    }


    // send ultimate response 
  return res.status(err.statusCode || 500).json({
    success: errorResponse.success,
    message : errorResponse.message,
    errorMessage : errorResponse.errorMessage,
    errorDetails : err,
    stack: err?.stack 
  });
};
