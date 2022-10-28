import type { Property } from "csstype"
import type { Decimal, Mapping } from "@src/util"

/**
 * Props shared by all VML elements/components.
 *
 * @see [VML - DTD Entity Definitions](https://www.w3.org/TR/NOTE-VML#_Toc416858384)
 */
export interface Props {
    /** opacity of the shape */
    opacity?: Decimal
    /** color to be made transparent */
    chromaKey?: unknown
    /** Boolean whether to stroke the outline or not */
    stroke?: "true" | "false"
    /** RGB color to use for the stroke */
    strokeColor?: Property.Color
    /** weight of the line to use for stroking */
    strokeWeight?: unknown
    /** Boolean whether to fill the shape or not */
    fill?: "true" | "false"
    /** RGB color to use for the fill */
    fillColor?: Property.Color
    /** Boolean whether the element is to be printed */
    print?: "true" | "false"
}

/**
 * Attributes shared by all VML elements/components.
 *
 * @see [VML - DTD Entity Definitions](https://www.w3.org/TR/NOTE-VML#_Toc416858384)
 */
export interface Attrs {
    /** opacity of the shape */
    opacity: Decimal
    /** color to be made transparent */
    chromakey: unknown
    /** Boolean whether to stroke the outline or not */
    stroke: "true" | "false"
    /** RGB color to use for the stroke */
    strokecolor: Property.Color
    /** weight of the line to use for stroking */
    strokeweight: unknown
    /** Boolean whether to fill the shape or not */
    fill: "true" | "false"
    /** RGB color to use for the fill */
    fillcolor: Property.Color
    /** Boolean whether the element is to be printed */
    print: "true" | "false"
}

export const PropAttrMap: Mapping<Props, Attrs> = {
    opacity: "opacity",
    chromaKey: "chromakey",
    stroke: "stroke",
    strokeColor: "strokecolor",
    strokeWeight: "strokeweight",
    fill: "fill",
    fillColor: "fillcolor",
    print: "print",
}

export const processProps = (props: Partial<Props>): Partial<Attrs> => {
    const attributes = {}

    for (const [key, value] of Object.entries(props)) {
        const correctKey = PropAttrMap?.[key]
        if (!!correctKey) {
            attributes[correctKey] = value
        }
    }

    return attributes
}
