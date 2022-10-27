import { html_beautify } from "js-beautify"


export const uglifyHtml = (html: string): string => {
    let result = `${html}`

    result = result.replaceAll(/</g, "\n<")
    result = result.replaceAll(/>/g, ">\n")

    // NOTE: alternative formatter
    // result = prettify(result)

    result = html_beautify(result, {
        // indent_empty_lines: true,
        end_with_newline: false,
        indent_size: 4,
        // preserve_newlines

        // wrap_attributes: "force-aligned",
        // wrap_line_length: 1,
    })

    result = result.replaceAll(/^\s*$\n/gm, "")

    return result
}

// =============================================================================
// Conditional Comments
// =============================================================================

import XRegExp from "xregexp"
import type { TokenFlag } from "xregexp"

const _flags: TokenFlag[] = [
    "g", // All matches, or advance lastIndex after matches (global)
    "x", // Free-spacing and line comments (extended)
    // "s", // Dot matches all (singleline)
]
const flags = _flags.join("")

export const replaceConditionalComments = (html: string) => {
    const pattern = /*REGEX*/`
(?<open><!--\\[if\\s[^]]+\\]>)
(?<content>.+)
(?=(?<close><!\\[endif\\]-->))
`.trim()
    console.log(pattern)
    const regex = XRegExp("(endif)", flags)

    let match = XRegExp.match(html, regex)
    // console.log(match)
    console.log(match?.length)
    return match
}
