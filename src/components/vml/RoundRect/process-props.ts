import { RoundRectProps } from "./RoundRect.types"
import { processBaseProps } from "../shared"

export const processProps = (props: RoundRectProps) => {
    const {
        children = undefined,
        ...otherProps
    } = props
    const processedProps = processBaseProps(otherProps)
    return {
        children,
        ...processedProps,
    }
}
