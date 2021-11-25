import React, { useState } from 'react'

const ContextData = React.createContext({})

export function UserDataContextProvider ({children}) {
    const [userName, setUsername] = useState(null)

    return <ContextData.Provider value={{userName, setUsername}}>
        {children}
    </ContextData.Provider>
}

export default ContextData;