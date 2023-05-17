const express = require('express');
const app = express();
const Person = require('./Person');
const cors = require('cors');
const bodyParser = require('body-parser');



const port = 9000;

app.use(express.json());

app.use(cors());

let persons = [];

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

app.get('/persons', (req, res) => {
  //return all persons as json
  res.json(persons);
});

app.get('/persons/:id', (req, res) => {
  //return person with id as json
  const id = req.params.id;
  const person = persons.find(p => p.id == id);
  res.json(person);
});

app.post('/persons', (req, res) => {
  //create a new person
  const person = new Person(req.body.name, parseInt(req.body.age), req.body.email);
  persons.push(person);
  res.json(person);
});

app.put('/persons/:id', (req, res) => {
  //update a person
  const id = req.params.id;
  const person = persons.find(p => p.id == id);
  person.name = req.body.name;
  person.email = req.body.email;
  person.age = req.body.age;
  res.json(person);
});

app.delete('/persons/:id', (req, res) => {
  //delete a person
  const id = req.params.id;
  persons = persons.filter(p => p.id != id);
  res.json(persons);
});



app.listen(port, () => {
  console.log(`RESTFUL API listening at port ${port}`);

  for (let i = 0; i < 20; i++) {
    persons.push(Person.fake());
}

});

