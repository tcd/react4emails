import { assert, test, describe, dedent } from "@helpers"
import { uglifyHtml } from "@src/util"

test("uglifyHtml()", () => {

    describe("case 1", () => {
        const input = /*HTML*/`<div><span>This is an example</span></div>`
        const want = dedent/*HTML*/`
            <div>
                <span>
                    This is an example
                </span>
            </div>
        `
        const have = uglifyHtml(input)
        assert.equal(have, want)
    })

    describe("case 2", () => {
        const input = /*HTML*/`<!--[if mso]><span>only if</span><![endif]-->`
        const want = dedent/*HTML*/`
            <!--[if mso]>
                <span>
                    only if
                </span>
            <![endif]-->
        `
        const have = uglifyHtml(input)
        assert.equal(have, want)
    })

})
