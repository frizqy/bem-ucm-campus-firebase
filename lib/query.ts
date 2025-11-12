import mysql from "mysql2/promise"

export async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME, 
  });
  return connection;
}
export async function executeSQL({sql, param}: { param: { param: string }, sql: { sql: string }  }) {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME, 
        });

        const [row] = await connection.execute(sql, param);
        return row;
    } catch (error) {
        console.error(error);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}