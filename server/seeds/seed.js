const { User, sequelize } = require("../models");
const userData = require("./userData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    // Create your seed data here
    await User.bulkCreate(userData);

    console.log("Database seeding complete");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();
