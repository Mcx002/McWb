import { App, Controller } from "./app";
import { PublicController } from "../server/controllers/public.controller";
import express from "express";
import { BaseController } from "./base";
import { logger } from "../lib/logger";

export class Controllers implements Controller {
    private readonly Public = new PublicController();

    init(app: App): void {
        Object.entries(this).forEach(([_key, value]) => {
            if (value instanceof BaseController) {
                value.init(app);

                logger.info(`${value.name} initiated`);
            }
        });
    }

    route(): express.Router {
        const router = express.Router();
        router.use("/", this.Public.getRouter());
        return router;
    }
}
