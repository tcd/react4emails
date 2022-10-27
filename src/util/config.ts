import { green, red } from "colorette"

export type NodeEnv = "test" | "development" | "production"

const isNodeEnv = (env: string): env is NodeEnv => {
    return ["test", "development", "production"].includes(env)
}

export interface IConfig {
    NODE_ENV: NodeEnv
}

export class Config implements IConfig {
    public NODE_ENV: NodeEnv

    constructor() {
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
