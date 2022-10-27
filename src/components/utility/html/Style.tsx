import type { ReactNode } from "react"

export type StyleProps = {
    children?: ReactNode
}

/**
 */
export const Style = (props: StyleProps): JSX.Element => {

    const {
        children = undefined,
    } = props

    return (
        <style>
            <>
                {children && children}
            </>
        </style>
    )
}
