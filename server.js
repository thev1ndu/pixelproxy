const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("RS.");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
