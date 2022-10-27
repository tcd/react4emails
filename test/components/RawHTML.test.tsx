import { render, assert, test, describe } from "@helpers"
import { RawHTML } from "@src/components"

test("<RawHTML>", () => {
    describe("render", () => {
        const Component = (
            <RawHTML html="<!--[if mso]>"/>
        )
        const want = "<!--[if mso]>"
        const have = render(Component, { beautify: false })
        assert.isNotNull(have)
        assert.looseEquals(have, want)
    })
})
