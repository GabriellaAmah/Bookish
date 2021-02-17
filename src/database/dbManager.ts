import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

jest.setTimeout(60000)

let collection = ['ebook'];

class dbManager {
    db: any
    server: MongoMemoryServer
    connection: any
    constructor() {
        this.db = null;
        this.server = new MongoMemoryServer();
        this.connection = null
    }

    async start() {
        const url = await this.server.getUri()
    
        this.connection = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        let _db = this.connection.db(await this.server.getDbName())

        return _db
    }

    stop(){
        this.connection.close();
        return this.server.stop()
    }

    cleanup() {
        return Promise.all(collection.map((c) => this.db.collection(c).deleteMany({})));
      }
}

export default dbManager