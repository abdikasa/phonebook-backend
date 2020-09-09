const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3001;

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ezio Alditore",
    number: "050-123456",
    id: 2,
  },
  {
    name: "Kodak Armani",
    number: "060-123456",
    id: 3,
  },
];

app.get("/", (req, res) => {
  res.end("hello world");
});

app.get("/api/persons", (rq, res) => {
  res.json(phone);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  //if person's id doesn't exist -- undefined
  if (!person) res.status(404).end();
  res.json(person);
});

app.get("/info", (req, res) => {
  res.contentType = "text/html";
  res.send(`<p>Phonebook has info for ${[persons].length} people</p>
    <p>${new Date()}</p>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
