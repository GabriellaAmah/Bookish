import { apiResponse } from "../../utils/httpResponse";

const getIndex = () => {
    let message : string = "hello welcome to my wrapAsync";
    return apiResponse({
        successCode : 200,
        data : [],
        message
    })
}

export default getIndex
