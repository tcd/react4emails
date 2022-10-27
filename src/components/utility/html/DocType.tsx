import { RawHTML } from "../RawHTML"

export type DocTypeProps = {
    segments?: string[]
}

/**
 *
 * @see [MDN Web Docs - Doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)
 * @see [Campaign Monitor - Which Doctype Should I Use in HTML Email?](https://www.campaignmonitor.com/blog/email-marketing/correct-doctype-to-use-in-html-email/)
 * @see [(X)HTML Doctype Declarations List](https://www.w3.org/QA/2002/04/valid-dtd-list.html#DTD)
 */
export const DocType = (props: DocTypeProps): JSX.Element => {

    const segments = [
        "DOCTYPE",
        "html",

        // "PUBLIC",

        // `"-//W3C//DTD XHTML 1.0 Transitional//EN"`,
        // `http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd`,

        // `"-//W3C//DTD XHTML 1.0 Strict//EN"`,
        // `"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"`,
    ]
    const html = `<!${segments.join(" ")}>`

    return (
        <>
            <RawHTML html={html} />
        </>
    )
}
