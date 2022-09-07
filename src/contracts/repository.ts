import { Sequelize } from "sequelize";
import { logger } from "../lib/logger";

export class DatabaseContext {
    private conn!: Sequelize;
    constructor() {
        this.conn = new Sequelize({
            dialect: "postgres",
            username: "postgres",
            password: "postgres1234",
            host: "localhost",
        });
    }

    async testConnection() {
        try {
            await this.conn.authenticate();
            logger.info("DB Connection has been established successfully.");
        } catch (error) {
            logger.error("Unable to connect to the database:", error);
        }
    }
}
