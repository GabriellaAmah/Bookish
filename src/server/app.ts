import  express from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import clientRouter from '../routers/client'

const App  = express() 

App.use(cors())
App.use(bodyParser.json())
App.use(clientRouter)

export default App