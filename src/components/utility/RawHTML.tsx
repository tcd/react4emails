// import type { ReactNode } from "react"
import dedent from "dedent"

export type RawHTMLProps = {
    html: string
}

/**
 * FIXME: this only works when rendering components to strings, not to the actual DOM.
 */
export const RawHTML = ({ html = "" }: RawHTMLProps): JSX.Element => {
    return (
        <>
            {dedent(html)}
        </>
    )
}
