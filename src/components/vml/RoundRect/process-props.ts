import { sortProps } from "@src/util"
import type { RoundRectProps, RoundRectAttrs } from "./RoundRect.types"
import { processBaseProps } from "../shared"
import { processStyleProp } from "../shared"

export const processProps = (props: RoundRectProps = {}) => {
    const {
        style = undefined,
        children = undefined,
        arcSize = undefined,
        ...otherProps
    } = props

    const processedProps = processBaseProps<RoundRectAttrs>(otherProps)

    if (!!arcSize) {
        // @ts-ignore: next-line
        processedProps.arcsize = arcSize
    }

    // if (style) {
    //     // @ts-ignore: next-line
    //     processBaseProps.style = processStyleProp(style)
    // }

    const sortedProps = sortProps(processedProps, props)
    // const sortedProps = processedProps

    return {
        children,
        ...sortedProps,
    }
}
