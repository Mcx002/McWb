import { BaseService } from "../../contracts/base";
import { App } from "../../contracts/app";
import { PublicService } from "../../contracts/services";

export class Public extends BaseService<App> implements PublicService {
    constructor() {
        super("Public");
    }
    init(_app: App): void {
        // TODO
    }

    get(): string {
        return "data from service";
    }
}
