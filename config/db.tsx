import mysql from "mysql2/promise";

const toNumber = (value: string | undefined, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: toNumber(process.env.DB_PORT, 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "todo_db",
});

// Avoid crashing Next.js build workers when DB is unavailable.
if (process.env.NODE_ENV !== "production") {
  db.getConnection()
    .then((connection) => {
      console.log("database connected");
      connection.release();
    })
    .catch((error) => {
      console.error("database connection check failed:", error);
    });
}
