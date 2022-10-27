import type { ReactNode } from "react"
import type { Property } from "csstype"

import type { Decimal } from "@src/util"

export type RoundRectProps = {
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
