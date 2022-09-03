import * as dotenv from "dotenv";
import { AppConfig } from "./contracts/config";
import { Env } from "./lib/env";

dotenv.config();

export const config: AppConfig = {
    appPort: Env.getInt("APP_PORT", { defaultValue: 4000 }),
};
