import config from "../utils/config/config.js";
import { Pool, QueryResult } from "pg";
import logger from "../utils/Logger/index.js";

interface IDBClient {
  queryForOne(query: string, params?: any[]): Promise<any>;
  queryForMany(query: string, params?: any[]): Promise<any[]>;
}

class PostgresqlClient implements IDBClient {
  pool: Pool | null = null;

  constructor() {
    this.pool = new Pool({
      connectionString: config.db.connectionString,
      ssl: {
        rejectUnauthorized: false,
      },
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 20000,
    });
    this.pool
      .query("SELECT 1")
      .then(() => logger.info("Database connected successfully"))
      .catch((err) => logger.error("Database connection failed", err));

    // Handle unexpected errors on idle clients
    this.pool.on("error", (err) => {
      logger.error("Unexpected DB error", err);
    });

    // this.pool
    //   .connect()
    //   .then(() => {
    //     logger.info("Database connected successfully");
    //   })
    //   .catch((e: Error) => console.log("Database Conneted Error", e.message));
    // this.pool.on("error", (error: Error) => {
    //   console.log(
    //     "This is db Error",
    //     error.name,
    //     "|",
    //     error.message,
    //     "|",
    //     error.stack,
    //     "|",
    //     ""
    //   );
    // });
  }

  private async query(
    query: string,
    params?: any[]
  ): Promise<QueryResult<any> | null> {
    const client = await this.pool?.connect();
    try {
      await client?.query("BEGIN");
      const res = await client?.query(query, params);
      await client?.query("COMMIT");
      return res ?? null;
    } catch (error) {
      console.log(error);
      await client?.query("ROLLBACK");
      return null;
    } finally {
      client?.release();
    }
  }
  async queryForOne(query: string, params?: any[]): Promise<any> {
    const value = await this.query(query, params);
    if ((value?.rows.length ?? 0) > 0) {
      return value?.rows[0];
    }
    return null;
  }
  async queryForMany(query: string, params?: any[]): Promise<any[]> {
    const value = await this.query(query, params);
    return value?.rows ?? [];
  }
}

const clientProvider = (): IDBClient => {
  const dbClient = new PostgresqlClient();
  return dbClient;
};

const dbclient = clientProvider();
export default dbclient;
