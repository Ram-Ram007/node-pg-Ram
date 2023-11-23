const express = require("express");
const router = express.Router();
const {
  updateStatusController,
  getFavController,
  overallRatingController,
  cancelListController,
} = require("../controllers/controller");

router.put("/update", updateStatusController);

router.get("/fav", getFavController);

//get rating
router.get("/rating", overallRatingController);

// CANCEL::
router.get("/cancel", cancelListController);

module.exports = router;
