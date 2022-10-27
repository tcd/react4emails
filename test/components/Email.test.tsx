import { render, assert } from "@helpers"
import { Email } from "@src/components/utility/html/index"

describe("<Email>", () => {
    it("render", () => {
        const rendered = render(<Email />)
        assert.isNotNull(rendered)
    })
})
