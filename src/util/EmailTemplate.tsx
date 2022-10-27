import type { CSSObject } from "@emotion/react"
import postcss from "postcss"
import postcssJs from "postcss-js"
import postcssNested from "postcss-nested"

import {
    emailFavicon,
    componentToString,
    toHTML,
} from "./html"
import {
    juiceStyles,
} from "./css"
import type {
    ComponentWithoutProps,
    TemplateOptions,
} from "./types"

export interface EmailTemplateOptions extends TemplateOptions {
    /** @default false */
    favicon?: boolean
    /** @default false */
    inlineStyles?: boolean
    /** @default false */
    styleTag?: boolean
}

export class EmailTemplate implements EmailTemplateOptions {

    // -------------------------------------------------------------------------
    // Public
    // -------------------------------------------------------------------------

    public name: string
    public Template: ComponentWithoutProps
    public styles: CSSObject
    public favicon: boolean
    public inlineStyles: boolean
    public styleTag: boolean

    // -------------------------------------------------------------------------
    // Private
    // -------------------------------------------------------------------------

    private html: string
    private rawHtml: string
    private headerComponents: string[]
    private css: string

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(options: EmailTemplateOptions) {

        this.headerComponents = []

        this.name         = options.name
        this.Template     = options.Template
        this.styles       = options.styles ?? {}
        this.favicon      = options?.favicon === true
        this.inlineStyles = options?.inlineStyles === true
        this.styleTag     = options?.styleTag === true
    }

    public async build(): Promise<string> {
        this.css = postcss([postcssNested]).process(this.styles, { parser: postcssJs }).css
        this.rawHtml = componentToString(<this.Template />)

        if (this.inlineStyles) {
            this.html = juiceStyles(this.rawHtml, this.css)
        } else {
            this.html = this.rawHtml
        }

        const finishedHtml = toHTML({
            head: this.buildHeaderContent(),
            body: this.html,
        })

        return finishedHtml
    }

    // -------------------------------------------------------------------------
    // Private
    // -------------------------------------------------------------------------

    private buildHeaderContent(): string {
        if (this.favicon) {
            this.headerComponents.push(emailFavicon)
        }

        if (this.styleTag) {
            this.headerComponents.push([
                "<style>",
                this.css.replaceAll(/^/gm, "    "),
                "</style>",
            ].join("\n").replaceAll(/^/gm, "        "))
        }

        const tags = this.headerComponents.join("\n")
        return tags
    }
}
