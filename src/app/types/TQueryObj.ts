

export type TQueryObj = {
    [key:string]: unknown,
    page?:string,
    limit?:string,
    sortBy?:string,
    sortOrder?:string,
    fields?:string
}