/* eslint-disable no-undef */
import { NextFunction, Request, Response } from 'express'

interface httpError {
    title : any,
    statusCode : number,
    stack : string,
    errorMessage : string,
}

interface httpResponse {
    successCode : number,
    data : Array<any>,
    message : string
}


interface httpRequestParam {
    body : object,
    params : object,
    query : object
}

type requestFunction = (req : Request, res : Response, next ?: NextFunction) => void 


export {httpError, httpResponse, requestFunction, httpRequestParam}