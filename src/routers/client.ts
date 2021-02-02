import express from 'express';
import getIndex from '../client/controller/getIndex';
import expressWrapper from '../express/expressWrapper';
import getBook from '../client/controller/getBook'


const clientRouter = express.Router()

clientRouter.get('/', expressWrapper(getIndex))

clientRouter.get('/book', expressWrapper(getBook.getAllBook))

clientRouter.get('/book/:id', expressWrapper(getBook.getById))

export default clientRouter;