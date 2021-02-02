import BookModel from "../model/bookModel";
import { StatusCode } from "../utils/enum";
import { apiResponse } from "../utils/httpResponse";
import { BookModelInterface } from "../utils/interface";
import convertImage from "../utils/pdfConverter";

const postBook = async (httpRequest: any) => {
  const {
    title,
    author,
    genre,
    isCopyright,
    dor,
  }: BookModelInterface = httpRequest.body;

  const { path } = httpRequest.file

  let imagePath = await convertImage(path)

  const newBook = new BookModel({ title, author,  genre, imagePath, path, isCopyright, dor })

  await newBook.saveBook();

  return apiResponse({
    successCode: StatusCode.Created,
    data: [newBook],
    message: 'book successfully created'
  })
}

export default postBook