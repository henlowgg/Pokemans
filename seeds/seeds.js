const sequelize = require('../config/connection');
const { User, Collection } = require('../models');

const userData = require('./userData.json');
const collectionData = require('./collectionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const collection of collectionData) {
    await Collection.create({
      ...collection,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
