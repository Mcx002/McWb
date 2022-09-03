import { App, Controller } from "./app";
import { PublicController } from "../server/controllers/public.controller";
import express from "express";

export abstract class BaseController<T> {
    readonly name: string;
    protected constructor(name: string) {
        this.name = `Controller.${name}`;
    }
    getRouter(): express.Router {
        const router = express.Router();
        // Object.entries(this).forEach(([_, value]) => {
        //     console.log(value);
        // });
        // router.use("/");
        return router;
    }
    abstract init(app: T): void;
}

export class Controllers implements Controller {
    private readonly Public = new PublicController();

    init(app: App): void {
        Object.entries(this).forEach(([_key, value]) => {
            if (value instanceof BaseController) {
                value.init(app);

                // console.log(`${value.name}`);
            }
        });
    }

    route(): express.Router {
        const router = express.Router();
        router.use("/", this.Public.getRouter());
        return router;
    }
}
