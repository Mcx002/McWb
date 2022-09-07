import * as dotenv from "dotenv";
import { AppConfig } from "./contracts/config";
import { Env } from "./lib/env";

dotenv.config();

export const config: AppConfig = {
    appName: Env.getString("APP_NAME", { defaultValue: "Muchilsh App" }),
    appPort: Env.getInt("APP_PORT", { defaultValue: 4000 }),
    // Logger
    loggerName: Env.getString("LOGGER_NAME", {
        defaultValue: "Muchlish Logger",
    }),
    loggerShow: Env.getBool("LOGGER_SHOW", { defaultValue: true }),
    loggerTimestamp: Env.getBool("LOGGER_TIMESTAMP", { defaultValue: false }),
};
