import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "database_rentalx",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "database_rentalx",
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
