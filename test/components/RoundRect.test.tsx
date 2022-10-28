import { render, assert, logString } from "@helpers"
import { RoundRect } from "@src/components"

describe.only("<RoundRect>", () => {
    it("render", () => {
        const rendered = render(<RoundRect />)
        logString(rendered)
        assert.isNotNull(rendered)
    })
})
