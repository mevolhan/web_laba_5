const { isObjectHasProps } = require("../validators/utils/validators");

const isBlogDataValid = (data) => {
  isObjectHasProps(data, ["title", "description", "author", "date"]);

  const { title, description, author, date } = data;

  if (typeof title !== "string" || !title.trim())
    throw new Error("Некорректное значение для свойства title");

  if (typeof description !== "string" || !description.trim())
    throw new Error("Некорректное значение для свойства description");

  if (typeof author !== "string" || !author.trim())
    throw new Error("Некорректное значение для свойства author");

  if (!(date instanceof Date) || isNaN(date.getTime()))
    throw new Error("Некорректное значение для свойства date");
};

module.exports = isBlogDataValid;
