import BookModel from "../model/bookModel";
import { StatusCode } from "../utils/enum";
import { apiResponse } from "../utils/httpResponse";
import { BookModelInterface } from "../utils/interface";

const postBook = async (httpRequest : any) => {
  const {
    title,
    author,
    imagePath,
    genre,
    filePath,
    isCopyright,
    dor,
  }: BookModelInterface = httpRequest.body;

  const newBook = new BookModel({title, author, imagePath, genre, filePath, isCopyright, dor})

  await newBook.saveBook();

  return apiResponse({
      successCode : StatusCode.Created,
      data : [newBook],
      message : 'book successfully created'
  })
}

export default postBook