import  express from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import clientRouter from '../routers/client'
import adminRouter from '../routers/admin'

const App  = express() 

App.use(cors())
App.use(bodyParser.json())
App.use(clientRouter)
App.use(adminRouter)

export default App