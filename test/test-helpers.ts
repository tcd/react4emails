import chai, { assert, expect } from "chai"
import chaiXml from "chai-xml"

chai.use(chaiXml)

// chai.Assertion.showDiff = true
chai.config.showDiff = true
chai.config.includeStack = false
chai.Assertion.includeStack = false

export { assert, expect }
export { default as dedent } from "dedent"
export { test, describe } from "mocha"
export { componentToString as render } from "@src/util"
