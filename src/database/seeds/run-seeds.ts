import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { seedDatabase } from './initial-seeds';
const ormconfig = require('../../../ormconfig.json');

async function run() {
  const dataSource = new DataSource(ormconfig);
  await dataSource.initialize();
  
  try {
    await seedDatabase(dataSource);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await dataSource.destroy();
  }
}

run();
