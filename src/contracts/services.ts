import { Public } from "../server/services/public.service";
import { App, Service } from "./app";
import { BaseService } from "./base";
import { logger } from "../lib/logger";

export class Services implements Service {
    public Public: PublicService;
    constructor() {
        this.Public = new Public();
    }
    init(app: App): void {
        // logger.info("app.controller");
        Object.entries(this).forEach(([_, value]) => {
            if (value instanceof BaseService) {
                value.init(app);

                logger.info(`${value.name} initiated`);
            }
        });
    }
}

export interface PublicService {
    get(): string;
}
