import * as http from 'http';
import * as dotenv from 'dotenv'
import App from './app';
import ServerHandler  from '../utils/serverUtil'

dotenv.config()

const port  =  process.env.PORT

const server = http.createServer(App)

server.listen(port)

server.on('error', ServerHandler.onError)
server.on('listening', ServerHandler.onListen)