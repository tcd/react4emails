import type { ReactNode } from "react"
import { RawHTML } from "../utility"

export type IfNotMsoProps = {
    children: ReactNode
}

/**
 * Contents should **not** be rendered in Microsoft Outlook.
 *
 * ```html
 * <!--[if !mso]><!-->
 *    {children}
 * <!--<![endif]-->
 * ```
 *
 * @see [About conditional comments](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v%3dvs.85))
 */
export const IfNotMso = (props: IfNotMsoProps): JSX.Element => {

    const {
        children,
    } = props

    return (
        <>
            <RawHTML html="<!--[if !mso]><!-->" />
            {children && children}
            <RawHTML html="<!--<![endif]-->" />
        </>
    )
}
