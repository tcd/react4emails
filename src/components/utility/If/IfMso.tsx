import type { ReactNode } from "react"
import { If } from "./If"

export type IfMsoProps = {
    children: ReactNode
}

/**
 * `children` **should** be rendered in Microsoft Outlook.
 *
 * ```html
 * <!--[if mso]>
 *    {children}
 * <![endif]-->
 * ```
 *
 * @see [About conditional comments](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v%3dvs.85))
 */
export const IfMso = (props: IfMsoProps): JSX.Element => {

    const {
        children,
    } = props

    return (
        <If expression="mso">
            {children && children}
        </If>
    )
}
