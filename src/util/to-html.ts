import { docType } from "./doc-type"

export type ToHTMLOptions = {
    head: string
    body: string
}

export const toHTML = (options: ToHTMLOptions): string => {

    const {
        head = "",
        body = "",
    } = options

    const indentedBody = body.replaceAll(/^/gm, "        ")

    return /*HTML*/`${docType()}
<html
    dir="ltr"
    lang="en"
    xml:lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${head}
    </head>
    <body>
${indentedBody}
    </body>
</html>

`
}

// <style media="all" type="text/css">
// @-ms-viewport {{
//     width: device-width;
// }}
// </style>
// <!--[if gte mso 9]>
// <xml>
//     <o:OfficeDocumentSettings>
//         <o:AllowPNG/>
//         <o:PixelsPerInch>96</o:PixelsPerInch>
//     </o:OfficeDocumentSettings>
// </xml>
// <![endif]-->
