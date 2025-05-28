import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "DB name",
  process.env.DB_USER || "DB user",
  process.env.DB_PASSWORD || "DB password",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: 'postgres',
    logging: console.log
  }
);

// Test connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected successfully!');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
})();

export default sequelize;
