import express, { Request, Response } from 'express';

const clientRouter = express.Router()

clientRouter.get('/', (_req : Request, res : Response) => {
    return res.status(200).json({
        message : 'hello welcome to Ebook ts'
    })
} )

export default clientRouter;