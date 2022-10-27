import { assert, test, describe, dedent } from "@helpers"
import { uglifyHtml } from "@src/util"

test("uglifyHtml()", () => {

    describe("case 1", () => {
        const input = `<div><span>This is an example</span></div>`
        const want = dedent`
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
        const input = `<!--[if mso]><span>only if</span><![endif]-->`
        const want = dedent`
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
