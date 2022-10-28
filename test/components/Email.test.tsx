import { render, assert } from "@helpers"
import { Email } from "@src/components"

describe("<Email>", () => {
    it("render", () => {
        const rendered = render(<Email />)
        assert.isNotNull(rendered)
    })
})
