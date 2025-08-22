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
};

export default config;
