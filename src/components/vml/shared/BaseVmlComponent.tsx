import type { ReactNode } from "react"
import { Component } from "react"

import { RawHTML } from "@src/components"
import type { BaseProps } from "./PropsAndAttrs"

export abstract class BaseVmlComponent<TProps extends BaseProps> extends Component<TProps> {

    protected abstract _selfClosing: boolean
    protected abstract _tag: string
    // eslint-disable-next-line @typescript-eslint/ban-types
    protected abstract _processProps: Function

    // private processedProps: Partial<TAttrs>
    private formattedProps: string[]
    private children: ReactNode

    constructor(props: TProps) {
        super(props)
        this.children = undefined
        // this.processedProps = {}
        this.formattedProps = []
    }

    protected _render(): ReactNode {
        if (this._selfClosing === true) {
            <>
                <RawHTML html={`
                    <${this._tag}
                        ${this.formattedProps.join("\n")}
                    />
                `}/>
            </>
        }
        return (
            <>
                <RawHTML html={`
                    <${this._tag} ${this.formattedProps.join(" ")}>
                `}/>
                {this.children && this.children}
                <RawHTML html={`</${this._tag}>` }/>
            </>
        )
    }

    private processProps() {
        const {
            children = undefined,
            ...processedProps
        } = this._processProps(this.props)

        // this.processedProps = processedProps

        this.children = children
        for (const [key, value] of Object.entries(processedProps)) {
            this.formattedProps.push(`${key}="${value}"`)
        }
    }
}
