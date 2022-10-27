/**
 * Props shared by all VML elements/components.
 *
 * @see [VML - DTD Entity Definitions](https://www.w3.org/TR/NOTE-VML#_Toc416858384)
 */
export interface ShapeAttrs {
    /** opacity of the shape */
    opacity: unknown
    /** color to be made transparent */
    chromakey: unknown
    /** Boolean whether to stroke the outline or not */
    stroke: "true" | "false"
    /** RGB color to use for the stroke */
    strokecolor: unknown
    /** weight of the line to use for stroking */
    strokeweight: unknown
    /** Boolean whether to fill the shape or not */
    fill: "true" | "false"
    /** RGB color to use for the fill */
    fillcolor: unknown
    /** Boolean whether the element is to be printed */
    print: "true" | "false"
}

export const ShapeAttrNames = {
    opacity: "opacity",
    chromaKey: "chromakey",
    stroke: "stroke",
    strokeColor: "strokecolor",
    strokeWeight: "strokeweight",
    fill: "fill",
    fillColor: "fillcolor",
    print: "print",
}
