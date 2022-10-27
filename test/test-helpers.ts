import "./helpers"
import chai, { assert } from "chai"

chai.config.showDiff = true
chai.config.includeStack = false

export { assert }
export { default as dedent } from "dedent"
export { test, describe } from "mocha"
export { componentToString as render } from "@src/util"
