import { Query } from "mongoose";
import { TQueryObj } from "../types/TQueryObj";
import { filterFunction } from "./filterHelper";
import { paginateFunction } from "./paginateHelper";



export const getQuery = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
    const filteredData = filterFunction(modelQuery,query);
    const paginatedData = paginateFunction(filteredData, query);
    const sortedData = 
  };