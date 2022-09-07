import { config } from "../config";
import { getDateFormat } from "../helper/time.helper";

class McLogger {
    private readonly name!: string;
    private readonly showLog!: boolean;
    private readonly timestamp!: boolean;
    constructor(data: { name: string; showLog: boolean; timestamp: boolean }) {
        this.name = data.name;
        this.showLog = data.showLog;
        this.timestamp = data.timestamp;
        // this.info(`${this.name} Logger Started`);
    }
    info(message: string): void {
        if (!this.showLog) return;
        const timestamp = this.timestamp ? `[${getDateFormat()}]` : "";
        console.log(timestamp, "[INFO]", this.name, ":", message);
    }
    error(message: string, error?: unknown): void {
        if (!this.showLog) return;
        const timestamp = this.timestamp ? `[${getDateFormat()}]` : "";
        console.error(timestamp, "[ERROR]", this.name, ":", message, error);
    }
    debug(message: string): void {
        if (!this.showLog) return;
        const timestamp = this.timestamp ? `[${getDateFormat()}]` : "";
        console.log(timestamp, "[DEBUG]", this.name, ":", message);
    }
    warning(message: string): void {
        if (!this.showLog) return;
        const timestamp = this.timestamp ? `[${getDateFormat()}]` : "";
        console.warn(timestamp, "[WARNING]", this.name, ":", message);
    }
}

export const logger = new McLogger({
    name: config.loggerName,
    showLog: config.loggerShow,
    timestamp: config.loggerTimestamp,
});
