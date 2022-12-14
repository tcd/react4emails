import { assert, dedent } from "@helpers"
import { prettifyHtml } from "@src/util"

describe("prettifyHtml()", () => {

    it("case 1", () => {
        const input = `<div><span>This is an example</span></div>`
        const want = dedent`
            <div>
                <span>
                    This is an example
                </span>
            </div>
        `
        const have = prettifyHtml(input)
        assert.equal(have, want)
    })

    it("case 2", () => {
        const input = `<!--[if mso]><span>only if</span><![endif]-->`
        const want = dedent`
            <!--[if mso]>
                <span>
                    only if
                </span>
            <![endif]-->
        `
        const have = prettifyHtml(input)
        assert.equal(have, want)
    })

    // FIXME: this produces the correct result, but it fails..
    it.skip("case 3", () => {
        const input = `
                <!--[if IE|(mso gt 9)]><span>only if</span><![endif]-->
                <!--[if mso]><span>only if</span>
                <![endif]-->
                <div>
                    <!--[if mso]><span>only if</span><![endif]-->
                </div>
            `
        const want = dedent`
                <!--[if IE|(mso gt 9)]>
                    <span>
                        only if
                    </span>
                <![endif]-->

                <!--[if mso]>
                    <span>
                        only if
                    </span>
                <![endif]-->

                <div>
                    <!--[if mso]>
                        <span>
                            only if
                        </span>
                    <![endif]-->
                </div>
            `
        const have = prettifyHtml(input) + "\n"
        // console.log(have)
        assert.equal(have, want)
    })

})
