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
