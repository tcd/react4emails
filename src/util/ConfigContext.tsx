import { createContext, useContext } from "react"
import type { ReactNode } from "react"

import type { NodeEnv } from "./config"

export interface IConfigContext {
    testString: string
    /**
     * @default "development"
     */
    nodeEnv: NodeEnv
    /**
     * @default 4
     */
    indentSize: number
    /**
     * @default false
     */
    inlineStyles: boolean
}

const defaults: IConfigContext = {
    nodeEnv: null,
    testString: "hey, it worked",
    indentSize: 4,
    inlineStyles: false,
    // metaTags: Record<string, string>
}

const configContext = createContext<IConfigContext>(defaults)
configContext.displayName = "ConfigContext"

export type ConfigProviderProps = {
    children: ReactNode
    value?: Partial<IConfigContext>
}

export const ConfigProvider = (props: ConfigProviderProps) => {

    let {
        children,
        value = {},
    } = props

    value = {
        ...defaults,
        ...value,
    }

    return (
        // @ts-ignore: next-line
        <configContext.Provider value={value}>
            <>
                {children && children}
            </>
        </configContext.Provider>
    )
}

export const useConfig = (): IConfigContext => {
    const context = useContext(configContext)
    return context
}
