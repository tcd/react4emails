import { Component, ReactNode } from "react"
import { RawHTML } from "@vml4react/components"

export interface VmlComponentProps {}

export abstract class VmlComponent<Props> extends Component<Props> {

    protected abstract tag: string

    constructor(props: Props) {
        super(props)
    }

    protected _render(): ReactNode {
        return (
            <>
                <RawHTML html={`

                `}/>
            </>
        )
    }
}
