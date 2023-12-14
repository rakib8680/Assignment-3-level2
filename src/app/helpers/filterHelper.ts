/* eslint-disable @typescript-eslint/no-explicit-any */
import { Query } from "mongoose";
import { TQueryObj } from "../types/TQueryObj";


export const filterFunction = <T>(modelQuery : Query<T[],T>, query : TQueryObj)=>{

    const excludeFields = ['page', 'limit', 'sortBy', 'sortOrder', 'fields'];
    excludeFields.forEach(el => delete query[el]);

    const copyQueryObj:any = { ...modelQuery };

    if (copyQueryObj.level) {
        copyQueryObj["details.level"] = copyQueryObj.level;
        delete copyQueryObj.level;
      }
      excludeFields.forEach(el => delete query[el as keyof TQueryObj]);


     modelQuery = modelQuery.find(query)
    return modelQuery;
}
