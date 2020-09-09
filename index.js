const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3001;

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

app.get("/", (req, res) => {
  res.end("hello world");
});

app.get("/api/persons", (rq, res) => {
  res.json(notes);
});

app.get("/info", (req, res) => {
  res.contentType = "text/html";
  res.send(`<p>Phonebook has info for ${notes.length} people</p>
    <p>${new Date()}</p>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
