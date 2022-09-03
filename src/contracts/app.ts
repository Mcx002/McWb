import express from "express";

export interface App {
    service: Service;
    controller: Controller;
}

export interface Service {
    init(app: App): void;
}

export interface Controller {
    init(app: App): void;
    route(): express.Router;
}
