import express, { Request, Response } from "express";
import { EndpointData, MetadataEndpoints } from "../decorator/endpoints";
import { logger } from "../lib/logger";

export abstract class BaseController<T> {
    readonly name: string;
    protected constructor(name: string) {
        this.name = `Controller.${name}`;
    }
    getRouter(): express.Router {
        const router = express.Router();
        const options: EndpointData[] = Reflect.getMetadata(
            MetadataEndpoints,
            this
        );
        if (!options) {
            logger.info("this controller hasn't endpoint yet");
        }

        for (const option of options) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            router[option.method](
                option.path,
                (req: Request, res: Response) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const data = this[option.propertyKey](req, res);
                    res.json({
                        success: true,
                        message: "OK",
                        data,
                    });
                }
            );
        }
        return router;
    }
    abstract init(app: T): void;
}

export abstract class BaseService<T> {
    readonly name: string;
    protected constructor(name: string) {
        this.name = `Service.${name}`;
    }
    abstract init(app: T): void;
}

export abstract class BaseRepository<T> {
    abstract init(app: T): void;
}
