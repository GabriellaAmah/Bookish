import BookModel from "../../model/bookModel";
import { StatusCode } from "../../utils/enum";
import { apiResponse } from "../../utils/httpResponse";
import { httpParams} from "../../utils/interface";

class getBook {

  static async getAllBook() {
    let book = await BookModel.getAllBook();

    return apiResponse({
      successCode: StatusCode.Success,
      data: [book],
      message: "data available"
    });
  }

  static async getById(httpRequest : any) {
      const {id} : httpParams = httpRequest.params

      let book = await BookModel.getById(id)

      return apiResponse({
        successCode: StatusCode.Success,
        data: [book],
        message: "data available"
      });

  }
}

export default getBook;
