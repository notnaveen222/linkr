const express = require("express");
const router = express.Router();
const urlTable = require("../db");

router.get("/", function (req, res) {
  res.json({
    msg: "Redirect Home, enter a valid shorturl ID to redirect",
  });
});

router.get("/:shortUrlId", async function (req, res) {
  const shortUrlId = req.params.shortUrlId;
  const urlData = await urlTable.findOne({
    shortUrl: shortUrlId,
  });
  if (urlData) {
    //res.redirect(urlData.fullUrl);
    res.json({
      data: urlData.fullUrl,
    });
  } else {
    res.json({
      msg: "ShortURL Linked to none",
    });
  }
  //
});

module.exports = router;
