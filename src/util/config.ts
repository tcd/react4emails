import { green, red } from "colorette"

export type NodeEnv = "test" | "development" | "production"

const isNodeEnv = (env: string): env is NodeEnv => {
    return ["test", "development", "production"].includes(env)
}

const tryParseInt = (input: any, fallback: number): number => {
    const parsed = parseInt(input)
    return isNaN(parsed) ? fallback : parsed
}

export interface IConfig {
    NODE_ENV: NodeEnv
    INDENT_SIZE: number
}

export class Config implements IConfig {
    public NODE_ENV: NodeEnv
    public INDENT_SIZE: number

    constructor() {
        this.INDENT_SIZE = tryParseInt(process.env["INDENT_SIZE"], 4)
        this.NODE_ENV = process.env["NODE_ENV"] as NodeEnv

        if (isNodeEnv(this.NODE_ENV)) {
            console.log("=============================================================================")
            console.log(`NODE_ENV: ${green(this.NODE_ENV)}`)
            console.log("=============================================================================\n")
        } else {
            console.error(`unknown NODE_ENV: ${red(this.NODE_ENV)}`)
            process.exit(1)
        }
    }

    public isTest(): boolean { return this.NODE_ENV === "test" }
    public isDev():  boolean { return this.NODE_ENV === "development" }
    public isProd(): boolean { return this.NODE_ENV === "production"  }
}

const _CONFIG = new Config()

export const CONFIG = _CONFIG
