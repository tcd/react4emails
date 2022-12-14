// import type { Mapping } from "@src/util"
import * as Core from "./Core"
import * as Shape from "./Shape"

export type BaseProps =
    & Core.Props
    & Shape.Props

export type BaseAttrs =
    & Core.Attrs
    & Shape.Attrs

// export const BasePropAttrMap: Mapping<BaseProps, BaseAttrs> = {
//     ...Core.PropAttrMap,
//     ...Shape.PropAttrMap,
// }

export const processBaseProps = <
    TAttrs extends BaseAttrs = any,
    TProps extends BaseProps = any,
>(props: Partial<TProps>): Partial<TAttrs> => {
    // @ts-ignore: next-line
    return {
        ...Core.processProps(props),
        ...Shape.processProps(props),
    }
}
