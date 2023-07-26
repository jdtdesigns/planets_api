const db = require('./connection');
const { faker } = require('@faker-js/faker');
const { User } = require('../models');

const users = [];
let amount = 50;

while (amount--) {
  users.push({
    username: faker.internet.displayName().toLowerCase(),
    password: faker.internet.password()
  });
}

async function seed() {
  await User.deleteMany({});

  console.log('Users deleted');

  await User.insertMany(users);

  console.log('Users seeded!');
  process.exit();
}

seed();

