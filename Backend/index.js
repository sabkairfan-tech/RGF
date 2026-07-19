import express from "express";
import dotenv from "dotenv";
import routes from "./Routes/routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/uploads", express.static("Uploads"));

const PORT = process.env.PORT ||4000;

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});