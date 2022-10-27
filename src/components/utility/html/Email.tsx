import type { ReactNode } from "react"

import { DocType } from "./DocType"
import { Head } from "./Head"
import { Html } from "./Html"

export type EmailProps = {
    children?: ReactNode
}

export const Email = (props: EmailProps): JSX.Element => {

    const {
        children = <span>no content</span>,
    } = props

    return (
        <>
            <DocType />
            <Html>
                <Head>

                </Head>
                <body>
                    <>
                        {children && children}
                    </>
                </body>
            </Html>
        </>
    )
}
