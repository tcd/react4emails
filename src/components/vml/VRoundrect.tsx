import type { Property } from "csstype"
import type { ReactNode } from "react"

import { RawHTML } from "@vml4react/index"

export type VRoundrectProps = {
    children?: ReactNode
    id?: string
    fillcolor?: Property.BackgroundColor
    strokecolor?: Property.BackgroundColor
    style?: string
    /**
     * Defines rounded corners as a percentage of half the smaller dimension of the rectangle.
     *
     * 0.0 (0%) – square corners, 1.0 (100%) - smaller dimension forms a semi-circle.
     *
     * @see [VML ArcSize Attribute](https://learn.microsoft.com/en-us/windows/win32/vml/msdn-online-vml-arcsize-attribute)
     */
    arcsize?: string
    href?: string
    target?: string
    className?: string

    title?: string
    alt?: string
    opacity?: Decimal
    chromakey?: unknown
    stroke?: boolean
    // strokeweight="0.75pt"
    fill?: boolean
    print?: boolean
    // coordsize="1000,1000"
    // coordorigin="0 0"
}

/**
 * `<v:roundrect>`
 *
 * @see [VML RoundRect Element](https://learn.microsoft.com/en-us/windows/win32/vml/msdn-online-vml-roundrect-element)
 * @see [VML Spec](https://www.w3.org/TR/NOTE-VML#-toc416858405)
 */
export const VRoundrect = (props: VRoundrectProps): JSX.Element => {

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
