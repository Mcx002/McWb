interface ParserConfig {
    parseString(payload: unknown): string;
    parseInt(payload: unknown): number;
    parseBool(payload: unknown): boolean;
}

class MCParser implements ParserConfig {
    parseBool(input: unknown, options?: { defaultValue?: boolean }): boolean {
        switch (typeof input) {
            case "boolean": {
                return input;
            }
            case "bigint":
            case "number": {
                return input === 1;
            }
            case "string": {
                return input.toLowerCase() === "true";
            }
        }

        if (options && options.defaultValue != null) {
            return options.defaultValue;
        }

        throw new Error(`${typeof input} cannot be converted to type boolean`);
    }

    /**
     * @param input - given value
     * @param options - optional, { radix: number }.
     *
     * - radix: A value between 2 and 36 that specifies the base of the number in `string`.
     */
    parseInt(
        input: unknown,
        options?: { radix: number; defaultValue?: number }
    ): number {
        switch (typeof input) {
            case "number": {
                return input;
            }
            case "bigint": {
                return Number(input);
            }
            case "boolean": {
                if (input) {
                    return 1;
                }
                return 0;
            }
            case "string": {
                const i = parseInt(input, options ? options.radix : void 0);

                if (Number.isFinite(i)) {
                    return i;
                }
            }
        }

        if (options && options.defaultValue != null) {
            return options.defaultValue;
        }

        throw new Error(`${typeof input} cannot be converted to type integer`);
    }

    parseString(input: unknown, options?: { defaultValue?: string }): string {
        switch (typeof input) {
            case "string": {
                return input;
            }
            case "number":
            case "boolean":
            case "bigint":
                return input.toString();
        }

        if (options && options.defaultValue != null) {
            return options.defaultValue;
        }

        throw new Error(`${typeof input} cannot be converted to type string`);
    }
}

export const Parser = new MCParser();
