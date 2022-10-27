import type { ReactNode } from "react"

type IntrinsicProps = React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>

export type HtmlProps = IntrinsicProps & {
    children?: ReactNode
}

/**
 */
export const Html = (props: HtmlProps): JSX.Element => {

    const {
        children = undefined,
    } = props

    return (
        <html>
            <>
                {children && children}
            </>
        </html>
    )
}
