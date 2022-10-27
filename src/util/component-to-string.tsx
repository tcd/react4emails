import { renderToString } from "react-dom/server"
import { decode } from "html-entities"
import { html_beautify } from "js-beautify"
import type { HTMLBeautifyOptions } from "js-beautify"
import type { ReactElement } from "react"

export type ComponentToStringOptions = {
    decode?: boolean
    wrap?: boolean
}

export const componentToString = (el: ReactElement, options: ComponentToStringOptions = {}): string => {
    const {
        decode: shouldDecode = true,
        wrap = false,
    } = options

    let result = renderToString(el)

    if (shouldDecode) {
        result = decode(result)
    }

    if (wrap) {
        result = html_beautify(result, options_wrap)
    } else {
        result = html_beautify(result, options_noWrap)
    }

    return result
}

// =============================================================================

const options: HTMLBeautifyOptions = {
    end_with_newline: true,
    indent_size: 4,
}

const options_wrap: HTMLBeautifyOptions = {
    ...options,
    wrap_attributes: "force-aligned",
    wrap_line_length: 1,
}

const options_noWrap: HTMLBeautifyOptions = {
    ...options,
}
