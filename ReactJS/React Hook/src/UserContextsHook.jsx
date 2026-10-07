import React, { createContext, useContext } from 'react'

// UseContext Hook allow components to access share data without passing props throung every intermidiate components
const UserContextsHook = () => {
    const userContext = createContext()
    function Profile() {
        const user = useContext(userContext)
        return <h1>Hello {user}</h1>
    }
  return (
    <div>
        <userContext.Provider value="Ram">
            <Profile />
        </userContext.Provider>
    </div>
  )
}
export default UserContextsHook