import { BookModelInterface } from '../utils/interface'
import db from '../database/db'

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
        this.filePath = bookInput.filePath
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
}

export default BookModel