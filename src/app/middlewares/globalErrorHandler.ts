/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { handleValidationError } from "../errors/handleValidationError";
import { handleZodError } from "../errors/handleZodErrors";
import { TErrorResponse } from "../types/TErrorResponse";
import { handleCastError } from "../errors/handleCastError";


export const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

    let errorResponse : TErrorResponse = {
        success : false,
        message : 'Error',
        errorMessage : 'Something Went Wrong'
    };

    if(err instanceof ZodError){
       errorResponse =  handleZodError(err)
    }else if(err.name === 'ValidationError'){
        errorResponse = handleValidationError(err)
    }else if(err.name === 'CastError'){
      errorResponse = handleCastError(err)
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
