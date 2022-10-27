// import { decode } from "html-entities"
import { html_beautify } from "js-beautify"
import type { HTMLBeautifyOptions } from "js-beautify"

export const uglifyHtml = (html: string): string => {
    let result = `${html}`

    result = result.replaceAll(/</g, "\n<")
    result = result.replaceAll(/>/g, ">\n")

    // result = prettify(result)
    result = html_beautify(result, jsBeautifyOptions)
    // if (wrap) {
    //     result = html_beautify(result, options_wrap)
    // } else {
    //     result = html_beautify(result, options_noWrap)
    // }
    result = result.replaceAll(/^\s*$\n/gm, "")

    return result
}


// =============================================================================

const jsBeautifyOptions: HTMLBeautifyOptions = {
    // indent_empty_lines: true,
    end_with_newline: false,
    indent_size: 4,
    // preserve_newlines

    // wrap_attributes: "force-aligned",
    // wrap_line_length: 1,
}
