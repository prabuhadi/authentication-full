import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js"; // import connection to sync models for automatic generate
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
dotenv.config();

const app = express();

(async () => {
  await db.sync();
})();

// Entry Point, run server "nodemon index"

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: "auto",
    },
  })
);

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

app.listen(process.env.APP_PORT, () => {
  console.log("Server berhasil dijalankan...");
});
