import { StatusCode } from "../../utils/enum";
import { apiResponse } from "../../utils/httpResponse";

const getIndex = () => {
    let message : string = "hello welcome to my wrapAsync";
    return apiResponse({
        successCode : StatusCode.Success,
        data : [],
        message
    })
}

export default getIndex
