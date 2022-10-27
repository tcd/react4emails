import { render, assert, dedent } from "@helpers"
import { If } from "@src/components"

describe("<If>", () => {
    it("render", () => {
        const Component = (
            <If>
                <span>only if</span>
            </If>
        )
        const want = dedent`
            <!--[if mso]>
                <span>only if</span>
            <![endif]-->
        `
        const have = render(Component, { beautify: false })
        assert.isNotNull(have)
        // assert.equal(have, want)
        assert.xmlEquals(have, want)
    })
})
