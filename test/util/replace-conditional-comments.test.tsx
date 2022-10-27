import { test, describe, assert } from "@helpers"
import { replaceConditionalComments } from "@src/util"

test.only("replaceConditionalComments()", () => {

    describe.only("regexp", () => {
        const have = replaceConditionalComments(testString)
        // assert.equal(have, want)
    })

})

const testString = /*HTML*/`
<!--[if IE|(mso gt 9)]><span>only if</span><![endif]-->

<!--[if mso]>
    <span>only if</span>
<![endif]-->

<div>
    <!--[if mso]>
        <span>only if</span>
    <![endif]-->
</div>
`.trim()
