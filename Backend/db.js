const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://notnaveen2:HNPQx2348kocn8N6@cluster0.ncy9o.mongodb.net/url"
);

const urlSchema = mongoose.Schema({
  fullUrl: String,
  shortUrl: String,
});

const urlTable = mongoose.model("urlTable", urlSchema);

module.exports = urlTable;
