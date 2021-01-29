import expressWrapper from '../express/expressWrapper';
import express from 'express'
import postBook from '../admin/postBook';

const adminRouter = express.Router()

adminRouter.post('/book', expressWrapper(postBook))

export default adminRouter;