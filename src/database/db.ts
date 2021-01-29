import {MongoClient} from 'mongodb';
import dotenv from 'dotenv'

dotenv.config()

const client = new MongoClient(`${process.env.MONGODB_URL}`, {useNewUrlParser : true, useUnifiedTopology : true} )

async function db(){
    try {
        let clientConnect = await client.connect();
        let _db = clientConnect.db()

        console.log('client successfully connected to database')

        return _db
    } catch (error) {
        console.log(error)
    }
}

export default db