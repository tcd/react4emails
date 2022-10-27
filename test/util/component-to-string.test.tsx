import { assert } from "@helpers"
import { componentToString } from "@src/util"

describe("componentToString()", () => {
    it("without beautify", () => {
        const have = componentToString(Example, { beautify: false })
        assert.xmlEquals(have, want)
    })
    it("beautify", () => {
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
