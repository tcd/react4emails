import type { ReactNode } from "react"
import { RawHTML } from "../RawHTML"

export type IfProps = {
    /**
     * @default "mso"
     */
    expression?: string
    children: ReactNode
}

/**
 * # Conditional Comment
 *
 * `children` **should** be rendered if the conditional `expression` is true.
 *
 * ```html
 * <!--[if {rule}]>
 *    {children}
 * <![endif]-->
 * ```
 *
 * @see [About conditional comments](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v%3dvs.85))
 */
export const If = (props: IfProps): JSX.Element => {

    const {
        expression = "mso",
        children,
    } = props

    return (
        <>
            <RawHTML html={`<!--[if ${expression}]>` }/>
            {children && children}
            <RawHTML html="<![endif]-->" />
        </>
    )
}
