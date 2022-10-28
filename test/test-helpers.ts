import "./helpers"
import chai, { assert } from "chai"
import { blue } from "colorette"

chai.config.showDiff = true
chai.config.includeStack = false

const logString = (s: string): void => {
    const hr = blue("=============================================================================")
    console.log(["", hr, s, hr, ""].join("\n"))
}

export { assert, logString }
export { default as dedent } from "dedent"
export { componentToString as render } from "@src/util"
