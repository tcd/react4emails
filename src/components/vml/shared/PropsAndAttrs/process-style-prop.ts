import { createDangerousStringForStyles } from "@src/styles/react-dom-bindings"

/**
 * FIXME: properly implement this.
 */
export const processStyleProp = (style) => {
    if (!!!style) {
        return undefined
    }
    const processed = createDangerousStringForStyles(style)
    return processed
}
