import express from "express";

import {
  createEmployee
} from "../Controllers/empController.js";

const router = express.Router();
router.post("/create", createEmployee);

//router.get("/", getEmployees);

//router.get("/:id", getEmployeeById);

//router.put("/:id", updateEmployee);

//router.delete("/:id", deleteEmployee);

export default router;