import { render, test, describe, expect, dedent } from "@helpers"

import { useConfig, ConfigProvider } from "@src/util"

test.only("ConfigContext", () => {
    describe.only("useConfig()", () => {
        const have = render(<Parent />, { beautify: true })
        // console.log(have)
        expect(have).xml.to.deep.equal(want)
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
