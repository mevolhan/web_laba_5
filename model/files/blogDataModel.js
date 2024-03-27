const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "blogData.json");

const getBlogDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    throw new Error("Не удалось прочитать данные из файла блога");
  }
};

const postBlogDataModel = (data) => {
  try {
    writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    throw new Error("Не удалось записать данные в файл блога");
  }
};

module.exports = { getBlogDataModel, postBlogDataModel };
