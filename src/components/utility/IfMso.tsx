import type { ReactNode } from "react"
import { RawHTML } from "./RawHTML"

export type CenterProps = {
    children: ReactNode
}

/**
 * ```
 * <!--[if mso]>
 *    {children}
 * <![endif]-->
 * ```
 *
 * ## References
 *
 * - [Outlook Conditional CSS](https://stackoverflow.design/email/base/mso/)
 * - [HTML Emails: fallback for mso conditional?](https://stackoverflow.com/questions/18254711/html-emails-fallback-for-mso-conditional)
 */
export const IfMso = (props: CenterProps): JSX.Element => {
    const {
        children,
    } = props

    return (
        <>
            <RawHTML html="<!--[if mso]>" />
            {children && children}
            <RawHTML html="<![endif]-->" />
        </>
    )
}
