// @ts-ignore: next-line
export declare module "juice" {
    export interface Options {
        /**
         * Extra css to apply to the file.
         *
         * @default ""
         */
        extraCss?: string
        /**
         * Whether to inline styles in `<style></style>`.
         *
         * @default true
         */
        applyStyleTags?: boolean
        /**
         * Whether to remove the original `<style></style>` tags after (possibly) inlining the css from them.
         *
         * @default true
         */
        removeStyleTags?: boolean
        /**
         * Preserves all media queries (and contained styles) within `<style></style>` tags as a refinement when `removeStyleTags` is `true`.
         *
         * Other styles are removed.
         *
         * @default true
         */
        preserveMediaQueries?: boolean
        /**
         * Preserves all `@font-face` within `<style></style>` tags as a refinement when `removeStyleTags` is `true`.
         *
         * Other styles are removed.
         *
         * @default true
         */
        preserveFontFaces?: boolean
        /**
         * Preserves all key frames within `<style></style>` tags as a refinement when `removeStyleTags` is `true`.
         *
         * Other styles are removed.
         *
         * @default true
         */
        preserveKeyFrames?: boolean
        /**
         * Preserves all rules containing pseudo selectors defined in `ignoredPseudos` within `<style></style>` tags as a refinement when `removeStyleTags` is `true`.
         *
         * Other styles are removed.
         *
         * @default true
         */
        preservePseudos?: boolean
        /**
         * Whether to insert into the document any preserved `@media` or `@font-face` content from `extraCss` when using `preserveMediaQueries`, `preserveFontFaces`, or `preserveKeyFrames`.
         *
         * When `true` order of preference to append the `<style>` element is into `head`, then `body`, then at the end of the document.
         *
         * When a `string` the value is treated as a CSS/jQuery/cheerio selector, and when found, the `<style>` tag will be appended to the end of the first match.
         *
         * @default true
         */
        // @ts-ignore: next-line
        insertPreservedExtraCss?: boolean | string
        /**
         * Whether to use any CSS pixel widths to create `width` attributes on elements set in `juice.widthElements`.
         *
         * @default true
         */
        applyWidthAttributes?: boolean
        /**
         * Whether to use any CSS pixel heights to create `height` attributes on elements set in `juice.heightElements`.
         *
         * @default true
         */
        applyHeightAttributes?: boolean
        /**
         * Whether to create attributes for styles in `juice.styleToAttribute` on elements set in `juice.tableElements`.
         *
         * @default true
         */
        applyAttributesTableElements?: boolean
        /**
         * Whether to insert pseudo elements (`::before` and `::after`) as `<span>` into the DOM.
         *
         * Note: Inserting pseudo elements will modify the DOM and may conflict with CSS selectors elsewhere on the page (e.g., `:last-child`).
         *
         * @default false // I think
         */
        inlinePseudoElements?: boolean
        /**
         * Whether to output XML/XHTML with all tags closed.
         *
         * Note that the input must also be valid XML/XHTML or you will get undesirable results.
         *
         * @default false
         */
        xmlMode?: boolean
        /**
         * Preserve `!important` in values.
         *
         * @default false
         */
        preserveImportant?: boolean
    }
}
