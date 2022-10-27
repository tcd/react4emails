export const docType = () => {
    const segments = [
        "DOCTYPE",
        "html",

        // "PUBLIC",

        // `"-//W3C//DTD XHTML 1.0 Transitional//EN"`,
        // `http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd`,

        // `"-//W3C//DTD XHTML 1.0 Strict//EN"`,
        // `"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"`,
    ]
    return `<!${segments.join(" ")}>`
}
