/* eslint-disable no-undef */
import {  httpRequestParam, httpResponse,  requestFunction } from "../utils/interface"

const expressWrapper = (controller : (requestParams? : httpRequestParam) => any ): requestFunction => {
    return async (req, res) => {
        const httpRequest : httpRequestParam = {
            body: req.body,
            params: req.params,
            query: req.query,
            file : req.file
        }

        try {
            let controllerData : httpResponse = await controller(httpRequest)

            return res.status(controllerData.successCode).send(controllerData)
        } catch (error) {
            console.log(error)
        }
    }

}
    export default expressWrapper
