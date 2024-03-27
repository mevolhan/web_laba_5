const { getBlogDataModel, postBlogDataModel } = require("../model/files/blogDataModel");
const isBlogDataValid = require("../validators/isBlogDataValid.js");

const getBlogDataController = (req, res, next) => {
  try {
    const data = getBlogDataModel();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postBlogDataController = (req, res, next) => {
  try {
    const data = req.body;
    isBlogDataValid(data);
    postBlogDataModel(data);
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getBlogDataController, postBlogDataController };
