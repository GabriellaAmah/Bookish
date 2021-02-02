/* eslint-disable no-undef */
import { NextFunction, Request, Response } from 'express'

interface httpError {
    title: any,
    statusCode: number,
    stack: string,
    errorMessage: string,
}

interface httpResponse {
    successCode: number,
    data: Array<any>,
    message: string
}


interface httpRequestParam {
    body: BookModelInterface,
    params: object,
    query: object,
    file : object
}

type requestFunction = (req: Request, res: Response, next?: NextFunction) => void

interface BookModelInterface {
    title : string,
    author : string,
    genre : string,
    imagePath : string,
    path : string,
    isCopyright : string,
    dor : string
}

interface httpParams {
    id? : string
}


export { httpError, httpResponse, requestFunction, httpRequestParam, BookModelInterface, httpParams }