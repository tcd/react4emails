import type { ReactNode } from "react"

export type CenterProps = {
    children: ReactNode
}

/**
 *
 * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center)
 */
export const Center = (props: CenterProps): JSX.Element => {
    return (
        // @ts-ignore: next-line
        <center>
            {props?.children && props?.children}
            {/* @ts-ignore: next-line */}
        </center>
    )
}
