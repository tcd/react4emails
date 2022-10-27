import juice, { Options as JuiceOptions } from "juice"

export const juiceStyles = (html: string, css: string, options: JuiceOptions = {}): string => {
    // juice.ignoredPseudos = ["hover", "active", "focus", "visited", "link"]
    // // @ts-ignore: next-line
    // juice.widthElements = ["TABLE", "TD", "TH", "IMG"]
    // // @ts-ignore: next-line
    // juice.heightElements = ["TABLE", "TD", "TH", "IMG"]
    // // @ts-ignore: next-line
    // juice.tableElements = ["TABLE", "TH", "TR", "TD", "CAPTION", "COLGROUP", "COL", "THEAD", "TBODY", "TFOOT"]
    juice.styleToAttribute = {
        "background-color": "bgcolor",
        "background-image": "background",
        "text-align": "align",
        "vertical-align": "valign",
    }

    const juiceOptions: JuiceOptions = {
        extraCss: css,
        preserveImportant: true,
        preserveMediaQueries: true,

        applyWidthAttributes: false,
        applyHeightAttributes: false,

        // removeStyleTags: false,
        // applyStyleTags: null,
        // preserveFontFaces: null,
        // preserveKeyFrames: null,
        // preservePseudos: null,
        // insertPreservedExtraCss: null,
        // applyAttributesTableElements: null,
        // inlinePseudoElements: null,
        xmlMode: true,
        ...options,
    }

    return juice(html, juiceOptions)
}
