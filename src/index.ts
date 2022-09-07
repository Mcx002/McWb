import express, { Express } from "express";
import { config } from "./config";
import { App } from "./contracts/app";
import { Services } from "./contracts/services";
import { Controllers } from "./contracts/controllers";
import { logger } from "./lib/logger";
import { DatabaseContext } from "./contracts/repository";

function setupExpress(app: App): Express {
    logger.info("Setting up expressjs...");

    const exApp = express();

    exApp.use("/", app.controller.route());

    logger.info("Expressjs initiated");

    return exApp;
}

async function booting(): Promise<App> {
    logger.info("Booting...");

    const app: App = {
        controller: new Controllers(),
        service: new Services(),
    };

    const db = new DatabaseContext();
    await db.testConnection();

    app.service.init(app);
    app.controller.init(app);

    logger.info("App initiated");

    return app;
}

async function main() {
    const app = await booting();
    const express = setupExpress(app);

    // Listener
    express.listen(config.appPort, () => {
        logger.info(`Expressjs Listen on port ${config.appPort}`);
    });
}

main().catch((_) => logger.error("Failed running app"));
