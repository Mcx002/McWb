import { App, Service } from "./app";

export class Services implements Service {
    init(app: App): void {
        console.log(app.controller);
    }
}
