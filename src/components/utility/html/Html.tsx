import type { ReactNode } from "react"

type IntrinsicProps = React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>

export type HtmlProps = IntrinsicProps & {
    children?: ReactNode
}

/**
 * `<html></html>`
 */
export const Html = (props: HtmlProps): JSX.Element => {

    const {
        children = undefined,
        ...otherProps
    } = props

    return (
        <html {...{
            ...otherProps,
            ...extraProps,
        }}>
            <>
                {children && children}
            </>
        </html>
    )
}

// =============================================================================

const extraProps = {
    dir:       "ltr",
    lang:      "en",
    xmlLang:   "en",
    xmlns:     "http://www.w3.org/1999/xhtml",
    // xmlns:     "http://www.w3.org/TR/REC-html40",
    "xmlns:m": "http://schemas.microsoft.com/office/2004/12/omml",
    "xmlns:o": "urn:schemas-microsoft-com:office:office",
    "xmlns:v": "urn:schemas-microsoft-com:vml",
    "xmlns:w": "urn:schemas-microsoft-com:office:word",
}
