import { BookModelInterface } from '../utils/interface'
import db from '../database/db'
import mongodb  from 'mongodb'

class BookConstructor {
    title: string
    author: string
    imagePath: string
    genre: string
    filePath: string
    dor: string
    constructor(bookInput: BookModelInterface) {
        this.title = bookInput.title
        this.author = bookInput.author
        this.imagePath = bookInput.imagePath
        this.genre = bookInput.genre
        this.filePath = bookInput.path
        this.dor = bookInput.dor
    }
}

class BookModel extends BookConstructor {

    async saveBook() {
        try {
            let getDb = await db()
            let savedItems = getDb?.collection('book').insertOne(this)
            return savedItems
        } catch (error) {
            console.log(error)
        }
    }

    static async getAllBook () {
        try {
            let getDb = await db()
            let allBooks = getDb?.collection('book').find({}).toArray()

            return allBooks
        } catch (error) {
            console.log(error)
        }
    }

    static async getById(id : any){
        try {
            let getDb = await db()
            let bookWithId = getDb?.collection('book').findOne({_id : new mongodb.ObjectId(id) })

            return bookWithId

        } catch (error) {
            console.log(error)
        }
    }
}

export default BookModel