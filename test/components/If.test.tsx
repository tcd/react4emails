import { render, assert, test, describe } from "@helpers"
import { If } from "@src/components"

test.skip("<If>", () => {
    describe("render", () => {
        const rendered = render(
            <If>
                <span>only if</span>
            </If>,
        )
        assert.isNotNull(rendered)
    })
})
