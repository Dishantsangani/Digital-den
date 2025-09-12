import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import config from "./utils/config/config.js";
import baseRouter from "./routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

const port = process.env.PORT || config.port;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(baseRouter);

app.get("/", (req, res) => {
  res.send(`<h1> Welcome to DigitalDen Server!</h1>
    <p>Backend is running successfully.</p>`);
});

// Start server
app.listen(port, () => {
  console.log(`Server Started At Port http://localhost:${port}`);
});
