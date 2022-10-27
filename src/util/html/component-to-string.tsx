import { renderToStaticMarkup } from "react-dom/server"
import { decode } from "html-entities"
import type { ReactElement } from "react"

import { uglifyHtml } from "./uglify-html"

export type ComponentToStringOptions = {
    /**
     * @default false
     */
    beautify?: boolean
    /**
     * @default false
     */
    decode?: boolean
}

export const componentToString = (el: ReactElement, options: ComponentToStringOptions = {}): string => {
    const {
        beautify = false,
        decode: shouldDecode = true,
    } = options

    let result = renderToStaticMarkup(el)

    if (shouldDecode) {
        result = decode(result)
    }

    if (beautify) {
        result = uglifyHtml(result)
    }

    return result
}
