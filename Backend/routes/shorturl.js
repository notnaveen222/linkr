const express = require("express");
const router = express.Router();
const urlTable = require("../db");

router.post("/", async function (req, res) {
  const fullUrl = req.body.fullUrl;
  const shortUrlId = "ABCDEF";
  if (fullUrl.trim() == "") {
    res.json({
      msg: "Invalid URL",
    });
  } else {
    const ExistingUrl = await urlTable.findOne({
      fullUrl: fullUrl,
    });
    if (ExistingUrl) {
      res.json({
        shortUrlId: ExistingUrl.shortUrl,
      });
    } else {
      await urlTable.create({
        fullUrl: fullUrl,
        shortUrl: shortUrlId,
      });
      res.json({
        msg: "ShortURL Successfully Created",
        shortUrlId: shortUrlId,
      });
    }
  }
});

module.exports = router;
