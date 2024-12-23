const express = require("express");
const app = express();
const shortUrlRouter = require("./routes/shorturl");
const redirectRouter = require("./routes/redirect");

app.use(express.json());

app.use("/shorturl", shortUrlRouter);
app.use("/", redirectRouter);
app.listen(3000);
module.exports = app;
