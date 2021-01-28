import express from 'express';
import getIndex from '../client/controller/getIndex';
import expressWrapper from '../express/expressWrapper';


const clientRouter = express.Router()

clientRouter.get('/', expressWrapper(getIndex))

export default clientRouter;