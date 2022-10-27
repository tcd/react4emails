import { renderToString } from "react-dom/server"
import { decode } from "html-entities"
import { html_beautify } from "js-beautify"
import type { HTMLBeautifyOptions } from "js-beautify"
import type { ReactElement } from "react"

export type ComponentToStringOptions = {
    /**
     * @default false
     */
    beautify?: boolean
    /**
     * @default false
     */
    decode?: boolean
    /**
     * @default false
     */
    wrap?: boolean
}

export const componentToString = (el: ReactElement, options: ComponentToStringOptions = {}): string => {
    const {
        beautify = false,
        decode: shouldDecode = true,
        wrap = false,
    } = options

    let result = renderToString(el)

    if (shouldDecode) {
        result = decode(result)
    }

    result = result.replaceAll(/</g, "\n<")
    result = result.replaceAll(/>/g, ">\n")

    if (beautify) {
        // result = prettify(result)
        result = html_beautify(result, options_base)
        // if (wrap) {
        //     result = html_beautify(result, options_wrap)
        // } else {
        //     result = html_beautify(result, options_noWrap)
        // }
    }

    result = result.replaceAll(/^\s*$\n/gm, "")

    return result
}

// =============================================================================

const options_base: HTMLBeautifyOptions = {
    // indent_empty_lines: true,
    end_with_newline: false,
    indent_size: 4,
    // preserve_newlines
}

const options_wrap: HTMLBeautifyOptions = {
    ...options_base,
    wrap_attributes: "force-aligned",
    wrap_line_length: 1,
}

const options_noWrap: HTMLBeautifyOptions = {
    ...options_base,
}
