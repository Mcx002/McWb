import * as dotenv from "dotenv";
import { Parser } from "./parser";

dotenv.config();

interface DotEnvParser {
    getString(key: string, options?: { defaultValue?: string }): string;
    getBool(key: string, options?: { defaultValue?: boolean }): boolean;
    getInt(key: string, options?: { defaultValue?: number }): number;
}

class EnvParser implements DotEnvParser {
    getString(key: string, options?: { defaultValue?: string }): string {
        if (process.env[key]) {
            return Parser.parseString(process.env[key]);
        }

        if (options && options.defaultValue != null) {
            return options.defaultValue;
        }

        throw new Error(
            `Env.${key} is not found and doesn't have default value`
        );
    }
    getBool(key: string, options?: { defaultValue?: boolean }): boolean {
        if (process.env[key]) {
            return Parser.parseBool(process.env[key]);
        }

        if (options && options.defaultValue != null) {
            return options.defaultValue;
        }

        throw new Error(
            `Env.${key} is not found and doesn't have default value`
        );
    }
    getInt(key: string, options?: { defaultValue?: number }): number {
        if (process.env[key]) {
            return Parser.parseInt(process.env[key]);
        }

        if (options && options.defaultValue != null) {
            return options.defaultValue;
        }

        throw new Error(
            `Env.${key} is not found and doesn't have default value`
        );
    }
}

export const Env = new EnvParser();
