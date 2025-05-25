import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'your_db_name',
  process.env.DB_USER || 'your_db_user',
  process.env.DB_PASSWORD || 'your_db_password',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false, // set to console.log to see SQL queries
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
