import fs from "fs";
import path from "path";

export type LogLevel = "info" | "warn" | "error" | "debug";

interface ILoggerOptions {
  level?: LogLevel;
  logToFile?: boolean;
  logDir?: string;
}

export default class Logger {
  private level: LogLevel;
  private logToFile: boolean;
  private logDir: string;

  constructor(options?: ILoggerOptions) {
    this.level = options?.level || "info";
    this.logToFile = options?.logToFile ?? false;
    this.logDir = options?.logDir || path.join(__dirname, "..", "logs");

    if (this.logToFile && !fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  private getLogFilePath(): string {
    const date = new Date().toISOString().split("T")[0];
    return path.join(this.logDir, `${date}.log`);
  }

  private log(level: LogLevel, message: string, data?: any) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}]: ${message}${
      data ? ` | Data: ${JSON.stringify(data)}` : ""
    }`;

    switch (level) {
      case "info":
        console.log(logEntry);
        break;
      case "warn":
        console.warn(logEntry);
        break;
      case "error":
        console.error(logEntry);
        break;
      case "debug":
        if (this.level === "debug") {
          console.debug(logEntry);
        }
        break;
    }

    if (this.logToFile) {
      const filePath = this.getLogFilePath();
      fs.appendFileSync(filePath, logEntry + "\n");
    }
  }

  info(message: string, data?: any) {
    this.log("info", message, data);
  }

  warn(message: string, data?: any) {
    this.log("warn", message, data);
  }

  error(message: string, data?: any) {
    this.log("error", message, data);
  }

  debug(message: string, data?: any) {
    this.log("debug", message, data);
  }
}
