import { convert } from "pdf-poppler";
import path from "path"

const convertImage = async (filepath: string) : Promise<string> => {
  let option = {
    format: "jpeg",
    out_dir: "coverImage",
    out_prefix: path.basename(filepath, path.extname(filepath)),
    page: 1,
  };

    await convert(filepath, option);

    return `coverImage\\${option.out_prefix}.jpg`;
};

export default convertImage;
