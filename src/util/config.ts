import { blue, green, magenta, red } from "colorette"

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

        this.validateNodeEnv()
    }

    public isTest(): boolean { return this.NODE_ENV === "test" }
    public isDev():  boolean { return this.NODE_ENV === "development" }
    public isProd(): boolean { return this.NODE_ENV === "production"  }

    private validateNodeEnv(): void {

        let color: (text: string | number) => string
        switch (this.NODE_ENV) {
            case "test":        color = green;   break
            case "development": color = blue;    break
            case "production":  color = magenta; break
            default:            color = red;     break // don't think we actually need to break on default...
        }

        const hr = color("=============================================================================")
        const nodeEnv = color(this.NODE_ENV)


        if (isNodeEnv(this.NODE_ENV)) {
            console.log([
                hr,
                `NODE_ENV: ${nodeEnv}`,
                hr,
            ].join("\n"))
        } else {
            console.error(`unknown NODE_ENV: ${nodeEnv}`)
            process.exit(1)
        }
    }
}

const _CONFIG = new Config()

export const CONFIG = _CONFIG
