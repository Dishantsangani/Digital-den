import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

interface Config {
  port: number;
  db: {
    user: string;
    host: string;
    password: string;
    database: string;
    port: number;
  };
  smtp: {
    email: string;
    password: string;
  };
  secret: {
    jwtsecretkey: string;
    cookies_secret: string;
  };
  stripe: string;
  frontend_url: string;
}

const config: Config = {
  port: parseInt(process.env.PORT || "5000"),
  db: {
    port: parseInt(process.env.DB_PORT || "9000"),
    database: process.env.DB_NAME || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "",
  },
  smtp: {
    email: process.env.EMAIL_USER || "",
    password: process.env.EMAIL_PASS || "",
  },
  secret: {
    jwtsecretkey: process.env.JWT_SECRET_KEY || "",
    cookies_secret: process.env.COOKIES_SECRET || "",
  },
  stripe: process.env.STRIPE_SECRET_KEY || "",
  frontend_url: process.env.FRONTEND_URL || "",
};

export default config;
