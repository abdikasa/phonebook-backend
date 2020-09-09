const express = require("express");
const { response } = require("express");
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

app.get("/api/persons", (req, res) => {
  res.json(phone);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  //if person's id doesn't exist -- undefined
  if (!person) res.status(404).end();
  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

app.get("/info", (req, res) => {
  res.contentType = "text/html";
  res.send(`<p>Phonebook has info for ${[persons].length} people</p>
    <p>${new Date()}</p>`);
});

const genID = () => {
  return Math.floor(Math.random() * 5000) + 1;
};

app.post("/api/persons", (req, res) => {
  const body = req.body;

  //check if name exists already
  const name = persons.every((person) => person.name !== req.body.name);

  //check if name is missing - 404 error if true
  if (!body.name || !body.number || !name)
    return res
      .status(404)
      .json({ error: "missing name/name must be unique/phone number missing" });

  //create person if data is vaid
  const person = {
    name: body.name,
    number: body.number,
    id: genID(),
  };

  //add person with all the other contacts
  persons = person.concat(person);
  res.json(persons);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
