import { render, dedent, assert } from "@helpers"

import { useConfig, ConfigProvider } from "@src/util"

describe("ConfigContext", () => {
    it("useConfig()", () => {
        const have = render(<Parent />, { beautify: true })
        assert.xmlEquals(have, want)
    })
})

// =============================================================================

const Parent = () => {
    return (
        <ConfigProvider>
            <Child />
        </ConfigProvider>
    )
}

const Child = () => {
    const { testString } = useConfig()
    return (
        <span>
            {testString}
        </span>
    )
}

const want = dedent/*HTML*/`
    <span>
        hey, it worked
    </span>
`
