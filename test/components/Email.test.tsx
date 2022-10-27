import { render, assert, test, describe } from "@helpers"
import { Email } from "@src/components/utility/html/index"

test("<Email>", () => {
    describe("render", () => {
        const rendered = render(<Email />)
        assert.isNotNull(rendered)
    })
})
