import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import config from "./utils/config/config.js";
import baseRouter from "./routes.js";

dotenv.config();
const app = express();

const port = config.port;

app.use(cors());

app.use(express.json());

app.use(baseRouter);

app.listen(port, () =>
  console.log(`Server Started At Port http://localhost:${port}`)
);
