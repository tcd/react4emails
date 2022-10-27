import type { ReactNode } from "react"

export type HeadProps = {
    children?: ReactNode
}

/**
 * TODO: meta tags
 * TODO: favicon
 * TODO: styles
 */
export const Head = (props: HeadProps): JSX.Element => {

    const {
        children = undefined,
    } = props

    return (
        <head>
            <>
                {children && children}
            </>
        </head>
    )
}

// =============================================================================
