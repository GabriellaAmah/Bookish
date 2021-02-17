import faker from "faker";

const makeFakeBook =  () => {
  return {
    title: faker.system.fileName(),
    author: faker.name.findName(),
    genre: faker.name.firstName(),
    imagePath: faker.system.filePath(),
    path: faker.system.filePath(),
    isCopyright : faker.random.boolean(),
    dor: faker.date.weekday(),
  }
};



export default makeFakeBook
