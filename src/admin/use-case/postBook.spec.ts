import supertest from 'supertest'
import App from '../../server/app'
import { httpResponse } from '../../utils/interface'
import makeFakeBook from '../../__test__/seed/book'

//jest.setTimeout(600000)

describe('it should put the book in the db', () => {


    it('should see if post route works', async () => {
        let fakeBook = makeFakeBook()
        const newBook: httpResponse = (await supertest(App).post('/book').field(fakeBook).attach('path', '../../../PDF/Learning_TypeScript.pdf')).body

        expect(newBook.data).toBe(fakeBook)

    })
})