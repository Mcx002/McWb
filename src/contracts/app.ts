import express from "express";
import { PublicService } from "./services";

export interface App {
    service: Service;
    controller: Controller;
}

export interface Service {
    init(app: App): void;
    Public: PublicService;
}

export interface Controller {
    init(app: App): void;
    route(): express.Router;
}
