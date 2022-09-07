import { App } from "../../contracts/app";
import { BaseController } from "../../contracts/base";
import { Get } from "../../decorator/endpoints";
import express from "express";
import { PublicService } from "../../contracts/services";

export class PublicController extends BaseController<App> {
    private publicService!: PublicService;

    constructor() {
        super("Public");
    }
    init(app: App) {
        const { service } = app;
        this.publicService = service.Public;
    }

    @Get()
    testData() {
        return { data: this.publicService.get() };
    }

    @Get("/data/:xid/get")
    testData2(req: express.Request) {
        return { data: req.params.xid };
    }
}
