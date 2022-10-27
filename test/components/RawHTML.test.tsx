import { render, assert } from "@helpers"
import { RawHTML } from "@src/components"

describe("<RawHTML>", () => {
    it("render", () => {
        const Component = (
            <RawHTML html="<!--[if mso]>"/>
        )
        const want = "<!--[if mso]>"
        const have = render(Component, { beautify: false })
        assert.isNotNull(have)
        assert.looseEquals(have, want)
    })
})
