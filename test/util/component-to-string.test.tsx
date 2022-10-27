import { test, describe } from "mocha"
import { assert } from "chai"

import { componentToString } from "@src/util"

test("componentToString()", () => {
    describe("beautify", () => {
        const el = <Example />
        const result = componentToString(el, { beautify: true })
        assert.equal(result, want)
    })
})

const Example = (): JSX.Element => {
    return (
        <div>
            <span>
                This is an example
            </span>
        </div>
    )
}

const want = `
<div>
    <span>
        This is an example
    </span>
</div>
`.trim()
