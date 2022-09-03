import express, { Express } from "express";
import { config } from "./config";
import { App } from "./contracts/app";
import { Services } from "./contracts/services";
import { Controllers } from "./contracts/controllers";

function setupExpress(): Express {
    const app = express();

    return app;
}

function main() {
    const app: App = {
        service: new Services(),
        controller: new Controllers(),
    };

    app.service.init(app);
    app.controller.init(app);

    const express = setupExpress();

    express.use("/", app.controller.route());

    express.listen(config.appPort, () => {
        console.log(`Listen on port ${config.appPort}`);
    });
}

main();
