import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import config from "./src/utils/config/config.js";
import baseRouter from "./src/routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

const port = process.env.PORT || config.port;

const allowsOrigins = [config.Deploy_frontend_url, config.frontend_url];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowsOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(baseRouter);

app.get("/", (req, res) => {
  res.send(`<h1> Welcome to DigitalDen Server!</h1>
    <p>Backend is running successfully.</p>`);
});

app.listen(port, () =>
  console.log(`Server Started At Port http://localhost:${port}`),
);
