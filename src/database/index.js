const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    login: true,
  }
);
sequelize.sync();


(async () => {
  try {
    await sequelize.authenticate();
    console.log(`[database] ${process.env.DATABASE_NAME} has been established successfully.`);
  } catch (error) {
    console.log({
      message: `[database] failed to connect.`,
      error: error,
    });
  }
})();

module.exports = sequelize;
