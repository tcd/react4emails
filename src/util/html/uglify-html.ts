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
