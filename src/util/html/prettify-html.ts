import { html_beautify } from "js-beautify"
import dedent from "dedent"

export const prettifyHtml = (html: string, wrap: boolean = false): string => {
    let result = `${html}`

    result = result.replaceAll(/</g, "\n<")
    result = result.replaceAll(/>/g, ">\n")

    // NOTE: alternative formatter
    // result = prettify(result)

    let comments: CommentData[]
    [result, comments] = replaceConditionalComments(result)

    result = html_beautify(result, {
        // preserve_newlines
        // indent_empty_lines: true,
        end_with_newline: false,
        indent_size: 4,
        ...(!!!wrap ? {} : {
            wrap_attributes: "force-expand-multiline",
            // wrap_line_length: 1,
        }),

    })

    if (comments?.length > 0) {
        for (const comment of comments) {
            result = result.replace(`<div_${comment.number}>`, comment.open)
            result = result.replace(`</div_${comment.number}>`, comment.close)
        }
    }

    result = result.replaceAll(/^\s*$\n/gm, "")

    return result
}

// =============================================================================
// Conditional Comments
// =============================================================================

interface CommentData {
    number: number
    open: string
    close: string
}

export const replaceConditionalComments = (html: string): [string, CommentData[]] => {
    const pattern = /(?<open><!--\[if\s[^\]]+\]>)(?<content>.+?)(?<close><!\[endif\]-->)/gms
    const comments: CommentData[] = []

    let i = 0

    const replacer = (_match: string, open: string, content: string, close: string, _offset: number, _string: string) => {
        i++

        comments.push({
            number: i,
            open,
            close,
        })

        return dedent`
            <div_${i}>
                ${content}
            </div_${i}>
        `
    }

    const result = `${html}`.replace(pattern, replacer)

    return [result, comments]
}
