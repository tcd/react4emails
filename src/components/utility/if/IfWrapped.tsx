import type { ReactNode } from "react"
import { IfMso } from "./IfMso"

export type IfWrappedProps = {
    before:   ReactNode | ReactNode[]
    after:    ReactNode | ReactNode[]
    children: ReactNode
}

/**
 * `before` and `after` **should** be rendered in Microsoft Outlook.
 *
 * `children` are rendered regardless.
 *
 * ```html
 * <!--[if mso]> {before} <![endif]-->
 *     {children}
 * <!--[if mso]> {after}  <![endif]-->
 * ```
 *
 * @see [About conditional comments](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v%3dvs.85))
 */
export const IfWrapped = (props: IfWrappedProps): JSX.Element => {

    const {
        before,
        after,
        children,
    } = props

    return (
        <>
            <IfMso>
                <>{before && before}</>
            </IfMso>

            {children && children}

            <IfMso>
                <>{after && after}</>
            </IfMso>
        </>
    )
}
