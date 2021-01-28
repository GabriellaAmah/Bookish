import express from 'express';
const clientRouter = express.Router();
clientRouter.get('/', (_req, res) => {
    return res.status(200).json({
        message: 'hello welcome to Ebook ts'
    });
});
export default clientRouter;
