const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

const { 
  getAllExpectationsData,
  postAllExpectationsData,
} = require("../controllers/allExpectationsDataController");

router.route("/allExpectations").get(getAllExpectationsData).post(postAllExpectationsData);

const {
  getBigButtonData,
  postBigButtonData,
} = require("../controllers/bigButtonDataController");

router.route("/bigButton").get(getBigButtonData).post(postBigButtonData);

const {
  getBlogDataController,
  postBlogDataController,
} = require("../controllers/blogDataController");

router.route("/blog").get(getBlogDataController).post(postBlogDataController);

const {
  getFooterData,
  postFooterData,
} = require("../controllers/footerDataController");

router.route("/footer").get(getFooterData).post(postFooterData);

module.exports = router;

