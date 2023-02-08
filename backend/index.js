import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js"; // import connection to sync models for automatic generate
import SequelizeStore from "connect-session-sequelize";
import ProductRoute from "./routes/ProductRoute.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();

const app = express();

// Untuk mengembalikan status login sebelumnya saat server dimatikan
const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync();
// })();

// Entry Point, run server "nodemon index"
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);
// store.sync(); // untuk menampilkan table session login di database sql

// Middleware, Frontend mengirimkan request dan cookie dengan menyertakan credentials
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server berhasil dijalankan...");
});
