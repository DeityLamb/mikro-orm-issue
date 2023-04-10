import { defineConfig } from '@mikro-orm/core';
import { join } from 'path';
import 'dotenv/config'

export default defineConfig({
  entities: ['./dist/entities/*.entity.js'],
  entitiesTs: ['./src/entities/*.entity.ts'],
  type: 'postgresql',
  clientUrl: process.env.POSTGRES_CONNECTION as string,
  debug: true,
  migrations: {
    snapshot: false,
    path: './dist/migrations',
    pathTs: './src/migrations',
    allOrNothing: true,
    transactional: true,
    tableName: `migrations`
  }
});
