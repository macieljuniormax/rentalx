import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "rentalx",
  synchronize: true,
  logging: false,
});

AppDataSource.initialize();
