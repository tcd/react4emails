import { createContext, useContext } from "react"
import type { ReactNode } from "react"

import type { NodeEnv } from "./config"

export interface IEmailContext {
    nodeEnv: NodeEnv
    testString: string
}

const defaults: IEmailContext = {
    nodeEnv: null,
    testString: "hey, it worked",
}

const emailContext = createContext<IEmailContext>(defaults)
emailContext.displayName = "EmailContext"

export const ConfigProvider = ({ children }: { children: ReactNode }) => {

    const value: IEmailContext = {
        ...defaults,
    }

    return (
        <emailContext.Provider value={value}>
            <>
                {children && children}
            </>
        </emailContext.Provider>
    )
}

export const useConfig = (): IEmailContext => {
    const context = useContext(emailContext)
    // logger.debug(context)
    return context
    // const {
    //     width,
    //     height,
    //     orientation,
    //     onMobile,
    // } = useContext(viewportContext)
    // return {
    //     width,
    //     height,
    //     orientation,
    //     onMobile,
    // }
}
