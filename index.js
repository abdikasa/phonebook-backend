const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.end("hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
