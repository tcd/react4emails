import chai, { assert, expect } from "chai"
import chaiXml from "chai-xml"

chai.use(chaiXml)

chai.config.showDiff = true
chai.config.includeStack = false

export { assert, expect }
export { default as dedent } from "dedent"
export { test, describe } from "mocha"
export { componentToString as render } from "@src/util"

// chai.assert.assertSpecial = function (actual) {
//     // see https://github.com/chaijs/chai/blob/master/lib/chai/assertion.js
//     // for Assertion's argument definitions
//     const _test = new chai.Assertion(null, null, chai.assert, true);
//     _test.assert(
//         actual === "special",
//         `expected ${actual} to be "special"`,
//         `expected ${actual} to not be "special"`,
//         "special",
//         actual,
//         true);
// }
