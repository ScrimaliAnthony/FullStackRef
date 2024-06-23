import * as pgPromise from 'pg-promise';

const pgp = pgPromise();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'postgres',
});

export default db;
