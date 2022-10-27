import type { CSSObject } from "@emotion/react"

// eslint-disable-next-line @typescript-eslint/ban-types
export type Integer = string & {}
// eslint-disable-next-line @typescript-eslint/ban-types
export type Decimal = string & {}

export type ComponentWithoutProps =
    | (() => JSX.Element)
    | ((_props: unknown) => JSX.Element)

export interface TemplateOptions {
    name: string
    Template: ComponentWithoutProps
    params?: string[]
    styles: CSSObject
}
