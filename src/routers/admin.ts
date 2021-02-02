import expressWrapper from '../express/expressWrapper';
import express from 'express'
import postBook from '../admin/postBook';
import uploads from '../utils/multer';

const adminRouter = express.Router()

adminRouter.post('/book', uploads, expressWrapper(postBook))

export default adminRouter;