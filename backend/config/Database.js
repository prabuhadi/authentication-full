import { Sequelize } from "sequelize";

// 1) Create database auth_db in xampp

const db = new Sequelize("auth_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
