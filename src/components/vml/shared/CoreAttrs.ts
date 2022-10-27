/**
 * Props shared by all VML elements/components.
 *
 * @see [VML - DTD Entity Definitions](https://www.w3.org/TR/NOTE-VML#_Toc416858384)
 */
export interface CoreAttrs {
    /** document-wide unique id */
    id?: unknown
    /** space separated list of classes */
    class?: unknown
    /** associated style info */
    style?: unknown
    /** advisory title/amplification */
    title?: string
    /** URL link if the element is clicked on */
    href?: string
    /** target frame for href */
    target?: string
    /** alternate text if element cannot be displayed */
    alt?: unknown
    /** size of coordinate space inside the element */
    coordsize?: unknown
    /** coordinate at top-left corner of element */
    coordorigin?: unknown
    /** outline to use for tight text wrapping */
    wrapcoords?: unknown
}

export const CoreAttrNames = {
    id: "id",
    className: "class",
    style: "style",
    title: "title",
    href: "href",
    target: "target",
    alt: "alt",
    coordSize: "coordsize",
    coordOrigin: "coordorigin",
    wrapCoords: "wrapcoords",
}
