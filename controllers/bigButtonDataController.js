const isBigButtonDataValid = require("../validators/isBigButtonDataValid");
const { getBigButtonDataModel, postBigButtonDataModel } = require("../model/files/bigButtonDataModel");

const getBigButtonData = (req, res, next) => {
  try {
    const data = getBigButtonDataModel();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postBigButtonData = (req, res, next) => {
  try {
    const data = req.body;
    isBigButtonDataValid(data);
    postBigButtonDataModel(data);
    res.status(200).json({ message: "Данные успешно обновлены" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getBigButtonData, postBigButtonData };