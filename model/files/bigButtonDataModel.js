const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "bigButtonData.json");

const getBigButtonDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    throw new Error("Не удалось прочитать данные из файла");
  }
};

const postBigButtonDataModel = (data) => {
  try {
    writeFileSync(filePath, JSON.stringify(data, null, 2)); // Use JSON.stringify with indentation
  } catch (error) {
    throw new Error("Не удалось записать данные в файл");
  }
};

module.exports = { getBigButtonDataModel, postBigButtonDataModel };