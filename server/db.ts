import { Pool, PoolConfig } from 'pg';

const credentials: PoolConfig = {
  host: 'localhost',
  port: 5432,
  database: 'task_tracker',
};

export const db = new Pool(credentials);
