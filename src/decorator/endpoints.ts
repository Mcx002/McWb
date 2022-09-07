import "reflect-metadata";

export const MetadataEndpoints = "muchlish:endpoints";

export interface EndpointData {
    method: string;
    path: string;
    propertyKey: string;
}

export function Get(path?: string) {
    return function (target: any, propertyKey: string) {
        let options: EndpointData[] = Reflect.getMetadata(
            MetadataEndpoints,
            target
        );
        if (!options) {
            options = [];
        }
        const endpoint: EndpointData = {
            method: "get",
            path: path || "/",
            propertyKey,
        };
        options.push(endpoint);

        Reflect.defineMetadata(MetadataEndpoints, options, target);
    };
}
export function Post(path?: string) {
    return function (target: any, propertyKey: string) {
        let options: EndpointData[] = Reflect.getMetadata(
            MetadataEndpoints,
            target
        );
        if (!options) {
            options = [];
        }
        const endpoint: EndpointData = {
            method: "post",
            path: path || "/",
            propertyKey,
        };
        options.push(endpoint);

        Reflect.defineMetadata(MetadataEndpoints, options, target);
    };
}
export function Put(path?: string) {
    return function (target: any, propertyKey: string) {
        let options: EndpointData[] = Reflect.getMetadata(
            MetadataEndpoints,
            target
        );
        if (!options) {
            options = [];
        }
        const endpoint: EndpointData = {
            method: "put",
            path: path || "/",
            propertyKey,
        };
        options.push(endpoint);

        Reflect.defineMetadata(MetadataEndpoints, options, target);
    };
}
export function Delete(path?: string) {
    return function (target: any, propertyKey: string) {
        let options: EndpointData[] = Reflect.getMetadata(
            MetadataEndpoints,
            target
        );
        if (!options) {
            options = [];
        }
        const endpoint: EndpointData = {
            method: "delete",
            path: path || "/",
            propertyKey,
        };
        options.push(endpoint);

        Reflect.defineMetadata(MetadataEndpoints, options, target);
    };
}
