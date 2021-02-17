
import makeFakeBook from "../__test__/seed/book"
import BookModel from "./bookModel";

describe('testing my database methods', () => {

    it('should insert value in the db', async () => {
        const faker  = makeFakeBook()
        const insertedFake = new BookModel(faker)

        expect(insertedFake).toBeDefined()
    })
})