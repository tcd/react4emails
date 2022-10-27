import { assert, test, describe, expect } from "@helpers"
import { componentToString } from "@src/util"

test("componentToString()", () => {
    describe("without beautify", () => {
        const have = componentToString(Example, { beautify: false })
        expect(have).xml.to.deep.equal(want)
    })
    describe("beautify", () => {
        const have = componentToString(Example, { beautify: true })
        assert.equal(have, want)
    })
})

// =============================================================================

const Example = (
    <div>
        <span>
            This is an example
        </span>
    </div>
)


const want = `
<div>
    <span>
        This is an example
    </span>
</div>
`.trim()
