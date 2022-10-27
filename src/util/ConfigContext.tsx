import { createContext, useContext } from "react"
import type { ReactNode } from "react"

import type { NodeEnv } from "./config"

export interface IConfigContext {
    nodeEnv: NodeEnv
    testString: string
}

const defaults: IConfigContext = {
    nodeEnv: null,
    testString: "hey, it worked",
}

const configContext = createContext<IConfigContext>(defaults)
configContext.displayName = "ConfigContext"

export const ConfigProvider = ({ children }: { children: ReactNode }) => {

    const value: IConfigContext = {
        ...defaults,
    }

    return (
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
