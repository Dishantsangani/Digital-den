// import dotenv from "dotenv";
// import express from "express";
// import cors from "cors";
// import config from "./utils/config/config.js";
// import baseRouter from "./routes.js";
// import cookieParser from "cookie-parser";

// dotenv.config();
// const app = express();

// const port = config.port;

// const allowsOrigins = [config.Deploy_frontend_url, config.frontend_url];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowsOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser());

// app.use(baseRouter);

// app.get("/", (req, res) => {
//   res.send(`<h1> Welcome to DigitalDen Server!</h1>
//     <p>Backend is running successfully.</p>`);
// });

// app.listen(port, () =>
//   console.log(`Server Started At Port http://localhost:${port}`)
// );
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";
import config from "./utils/config/config.js";
import baseRouter from "./routes.js";

const app = express();

// CORS
app.use(
  cors({
    origin: [config.Deploy_frontend_url, config.frontend_url],
    credentials: true,
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Use Base Router
app.use(baseRouter);

// Root route
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to DigitalDen Server!</h1><p>Backend is running successfully.</p>"
  );
});

// Local server
if (process.env.NODE_ENV !== "production") {
  app.listen(config.port, () =>
    console.log(`Server running at http://localhost:${config.port}`)
  );
}

// Serverless export for Vercel
export default serverless(app);
