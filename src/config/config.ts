
const dbHost = process.env.DB_HOST ?? '';
const dbUser = process.env.DB_USER ?? 'localhost';
const dbPassword = process.env.DB_PASSWORD ?? '';
const dbPort = process.env.DB_PORT ?? '3306';
const dbName = process.env.DB_NAME ?? 'mydb';
export const config = {
    dbUrl: `mysql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
    // DATABASE_URL="mysql://admin:password@mydb.xxxxx.us-east-1.rds.amazonaws.com:3306/mydb"
}