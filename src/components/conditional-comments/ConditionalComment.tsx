import type { ReactNode } from "react"
import { RawHTML } from "../utility"

export type ConditionalCommentProps = {
    expression: string
    children: ReactNode
}

/**
 * # Conditional Comment
 *
 * `children` **should** be rendered if the conditional `expression` is true.
 *
 * ```html
 * <!--[if {expression}]>
 *    {children}
 * <![endif]-->
 * ```
 *
 * @see [About conditional comments](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v%3dvs.85))
 */
export const ConditionalComment = (props: ConditionalCommentProps): JSX.Element => {

    const {
        expression,
        children,
    } = props

    return (
        <>
            <RawHTML html={`<!--[if ${expression}]>`}/>
            {children && children}
            <RawHTML html="<![endif]-->" />
        </>
    )
}
