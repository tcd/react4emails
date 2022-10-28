import { render, assert, logString, dedent } from "@helpers"
import { RoundRect } from "@src/components"

describe("<RoundRect>", () => {
    it("render", () => {
        const have = render(<RoundRect />)
        assert.isNotNull(have)
    })

    it("processProps()", () => {

        const have = render(<RoundRect
            href="https://www.w3.org/TR/NOTE-VML#_Toc416858405"
            arcSize="4%"
            strokeColor="#fff"
            fillColor="#0082B4"
        />, { beautify: true })

        const want = dedent`
            <v:roundrect
                xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:w="urn:schemas-microsoft-com:office:word"
                href="https://www.w3.org/TR/NOTE-VML#_Toc416858405"
                arcsize="4%"
                strokecolor="#fff"
                fillcolor="#0082B4"
            >
            </v:roundrect>
        `

        // logString(have)
        // logString(want)
        assert.looseEquals(have, want)
        assert.xmlEquals(have, want)
    })
})
