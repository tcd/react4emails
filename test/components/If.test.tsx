import { render, assert, test, describe, dedent, expect } from "@helpers"
import { If } from "@src/components"

test("<If>", () => {
    describe("render", () => {
        const Component = () => (
            <If>
                <span>only if</span>
            </If>
        )
        const want = dedent`
        <!--[if mso]>
            <span>only if</span>
        <![endif]-->
        `
        const have = render(<Component />, { beautify: false })
        assert.isNotNull(have)
        // assert.equal(have, want)
        expect(have).xml.to.deep.equal(want)
    })
})
