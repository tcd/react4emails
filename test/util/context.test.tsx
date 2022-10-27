import { assert, test, describe, expect, dedent } from "@helpers"

import { componentToString } from "@src/util"
import { useConfig, ConfigProvider } from "@src/util/EmailContext"

test.only("Context in SSR", () => {
    describe.only("it works", () => {
        const have = componentToString(<Parent />, { beautify: true })
        console.log(have)
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
