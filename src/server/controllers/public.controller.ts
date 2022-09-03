import { BaseController } from "../../contracts/controllers";
import { App } from "../../contracts/app";

export class PublicController extends BaseController<App> {
    constructor() {
        super("Public");
    }
    init(_app: App) {
        console.log("init Public");
    }
}
