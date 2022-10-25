import { RawHTML } from "@vml4react/components"
import type { RoundRectProps } from "./RoundRect.types"

/**
 * `<v:roundrect>`
 *
 * @see [VML RoundRect Element](https://learn.microsoft.com/en-us/windows/win32/vml/msdn-online-vml-roundrect-element)
 * @see [VML Spec](https://www.w3.org/TR/NOTE-VML#-toc416858405)
 */
export const RoundRect = (props: RoundRectProps): JSX.Element => {

    const {
        children = undefined,
        ...otherProps
    } = props

    const processedProps: any[] = []

    for (const [key, value] of Object.entries(otherProps)) {
        processedProps.push(`${key}="${value}"`)
    }

    return (
        <>
            <RawHTML html={`
                <v:roundrect
                    xmlns:v="urn:schemas-microsoft-com:vml"
                    xmlns:w="urn:schemas-microsoft-com:office:word"
                    ${processedProps}
                >
            `}/>
            {children && children}
            <RawHTML html="</v:roundrect>" />
        </>
    )
}
