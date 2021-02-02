import { httpError, httpResponse } from "./interface";

const httpErrorResponse = ({title, statusCode, stack, errorMessage} : httpError) => {
    let toReturn = {
        errors : [{
            title, 
            stack,
            errorMessage
        }]
    }

    return {
        headers : {
            'Content-Type' : 'application/json'
        },
        statusCode,
        data : JSON.stringify(toReturn)
    }

}

const apiResponse = ({successCode, data, message} : httpResponse) => {
    return {
        headers : {
            'Content-Type' : 'application/json'
        },
        successCode,
        message,
        data
    }

}

export {httpErrorResponse, apiResponse}