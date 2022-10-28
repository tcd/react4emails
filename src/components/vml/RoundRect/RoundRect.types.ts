import { PartialMapping } from "@src/util"
import type { ReactNode } from "react"

import type { BaseAttrs, BaseProps } from "../shared"

export interface RoundRectProps extends BaseProps {
    children?: ReactNode
    /**
     * Defines rounded corners as a percentage of half the smaller dimension of the rectangle.
     *
     * - 0.0 (0%)   - square corners
     * - 1.0 (100%) - smaller dimension forms a semi-circle
     *
     * @see [VML ArcSize Attribute](https://learn.microsoft.com/en-us/windows/win32/vml/msdn-online-vml-arcsize-attribute)
     */
    arcSize?: string

    // coordsize="1000,1000"
    // coordorigin="0 0-
}

export interface RoundRectAttrs extends BaseAttrs {
    children?: ReactNode
    /**
     * Defines rounded corners as a percentage of half the smaller dimension of the rectangle.
     *
     * - 0.0 (0%)   - square corners
     * - 1.0 (100%) - smaller dimension forms a semi-circle
     *
     * @see [VML ArcSize Attribute](https://learn.microsoft.com/en-us/windows/win32/vml/msdn-online-vml-arcsize-attribute)
     */
    arcsize?: string

    // coordsize="1000,1000"
    // coordorigin="0 0-
}

export const PropAttrMap: PartialMapping<RoundRectProps, RoundRectAttrs> = {
    children: "children",
    arcSize: "arcsize",
}
