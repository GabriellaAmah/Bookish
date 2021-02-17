import {MongoClient} from 'mongodb';
import dotenv from 'dotenv'
import dbManager from './dbManager';

dotenv.config()

const client = new MongoClient(`${process.env.MONGODB_URL}`, {useNewUrlParser : true, useUnifiedTopology : true} )

async function db(){
    try {
        let clientConnect = await client.connect();
        let dMan = new dbManager()
        let _db ;

        if(process.env.NODE_ENV == 'TEST'){
           _db  = clientConnect.db()
        }else {
            _db =  dMan.start()
        }

        console.log('client successfully connected to database')

        return _db
    } catch (error) {
        console.log(error)
    }
}

export default db