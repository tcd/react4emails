import type { ReactElement } from "react"
import { decode } from "html-entities"
import { renderToStaticMarkup as _render } from "react-dom/server"

import { prettifyHtml } from "./prettify-html"

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
     * @default true
     */
    wrap?: boolean
}

export const componentToString = (el: ReactElement, options: ComponentToStringOptions = {}): string => {
    const {
        beautify = false,
        decode: shouldDecode = true,
        wrap = true,
    } = options

    let result = _render(el)

    if (shouldDecode) {
        result = decode(result)
    }

    if (beautify) {
        result = prettifyHtml(result, wrap)
    }

    return result
}
