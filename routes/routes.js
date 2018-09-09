const faker = require('faker');
const express = require('express');
const app = express();
const path = require('path');

const appRouter = function (app) {
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  app.get('/user', (req, res) => {
    const data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
    });
    res.status(200).send(data);
  });

  app.get('/users/:num', (req, res) => {
    const users = [];
    const num = req.params.num;

    if (isFinite(num) && num > 0) {
      for (i = 0; i <= num - 1; i++) {
        users.push({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
        });
      }

      res.status(200).send(users);

    } else {
      res.status(400).send({ message: 'invalid number supplied' });
    }

  });
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
  });
};
module.exports = appRouter;
