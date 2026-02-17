import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "todo_db",
});

async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log("connection done");
    connection.release();
  } catch (error) {
    console.error("connection not done:", error);
    process.exit(1);
  }
}

testConnection();
