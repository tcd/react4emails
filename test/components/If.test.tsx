import { test, describe } from "mocha"
import { assert } from "chai"

import { If } from "@src/components"

test("If", () => {
    // const rendered = null
    // // @ts-ignore: next-line
    // assert("foo" === "bar", "foo is not bar")
    describe("this will pass", () => {
        // @ts-ignore: next-line
        assert("foo" !== "bar", "foo is not bar")
    })
    describe("this will fail", () => {
        // @ts-ignore: next-line
        assert("foo" === "bar", "foo is not bar")
    })
})
