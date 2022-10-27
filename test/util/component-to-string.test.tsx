import { assert, test, describe } from "@helpers"
import { componentToString } from "@src/util"

test("componentToString()", () => {
    describe("without beautify", () => {
        const have = componentToString(Example, { beautify: false })
        assert.xmlEquals(have, want)
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


const want = /*HTML*/`
<div>
    <span>
        This is an example
    </span>
</div>
`.trim()
