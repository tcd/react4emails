import { Property } from "csstype"
import type { ReactNode } from "react"

type IntrinsicProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>

export type BodyProps = IntrinsicProps & {
    children?: ReactNode
    /**
     * Color of text for visited hypertext links.
     */
    vlink?: Property.Color
}

/**
 */
export const Body = (props: BodyProps): JSX.Element => {

    const {
        children = undefined,
    } = props

    return (
        <body>
            <>
                {children && children}
            </>
        </body>
    )
}
