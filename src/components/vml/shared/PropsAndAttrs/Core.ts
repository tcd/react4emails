import type { Mapping } from "@src/util"

/**
 * Attributes shared by all VML elements/components.
 *
 * @see [VML - DTD Entity Definitions](https://www.w3.org/TR/NOTE-VML#_Toc416858384)
 */
export interface Props {
    /** document-wide unique id */
    id?: string
    /** space separated list of classes */
    className?: string
    /** associated style info */
    style?: Record<string, any>
    /** advisory title/amplification */
    title?: string
    /** URL link if the element is clicked on */
    href?: string
    /** target frame for href */
    target?: string
    /** alternate text if element cannot be displayed */
    alt?: string
    /** size of coordinate space inside the element */
    coordSize?: unknown
    /** coordinate at top-left corner of element */
    coordOrigin?: unknown
    /** outline to use for tight text wrapping */
    wrapCoords?: unknown
}

/**
 * Attributes shared by all VML elements/components.
 *
 * @see [VML - DTD Entity Definitions](https://www.w3.org/TR/NOTE-VML#_Toc416858384)
 */
export interface Attrs {
    /** document-wide unique id */
    id?: string
    /** space separated list of classes */
    class?: string
    /** associated style info */
    style?: unknown
    /** advisory title/amplification */
    title?: string
    /** URL link if the element is clicked on */
    href?: string
    /** target frame for href */
    target?: string
    /** alternate text if element cannot be displayed */
    alt?: string
    /** size of coordinate space inside the element */
    coordsize?: unknown
    /** coordinate at top-left corner of element */
    coordorigin?: unknown
    /** outline to use for tight text wrapping */
    wrapcoords?: unknown
}

export const PropAttrMap: Mapping<Props, Attrs> = {
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
