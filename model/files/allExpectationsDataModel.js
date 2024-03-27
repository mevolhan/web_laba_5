const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "allExpectationsData.json");

const getAllExpectationsDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    throw new Error("Не получилось прочитать данные из файла");
  }
};

const postAllExpectationsDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    throw new Error("Не получилось записать данные в файл");
  }
};

module.exports = { getAllExpectationsDataModel, postAllExpectationsDataModel };
