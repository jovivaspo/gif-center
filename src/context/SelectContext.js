import { createContext, useState } from "react";

const SelectContext = createContext()

const SelectProvider = ({children}) =>{
    const [select, setSelect] = useState(1)

    const data = {select, setSelect}

    return (
        <SelectContext.Provider value={data}>{children}</SelectContext.Provider>
    )
}

export {SelectContext, SelectProvider}