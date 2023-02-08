import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/Users.js";

// 4) Routing for respond to client request

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users/", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
