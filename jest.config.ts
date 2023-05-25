import type { Config } from "@jest/types";

const Config: Config.InitialOptions = {
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
};

export default Config;
