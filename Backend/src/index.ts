import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.listen(port, () =>
  console.log(`Server Started At Port http://localhost:${port}`)
);
