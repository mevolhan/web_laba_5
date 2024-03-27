const isAllExpectationsDataValid = require("../validators/isAllExpectationsDataValid");
const {
  getAllExpectationsDataModel,
  postAllExpectationsDataModel,
} = require("../model/files/allExpectationsDataModel");

const getAllExpectationsData = (req, res, next) => {
  try {
    const data = getAllExpectationsDataModel();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postAllExpectationsData = (req, res, next) => {
  try {
    const data = req.body;
    isAllExpectationsDataValid(data);
    postAllExpectationsDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getAllExpectationsData, postAllExpectationsData };
