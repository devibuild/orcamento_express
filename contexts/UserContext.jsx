import { createContext, useState } from "react";


export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        uf: 'placeholder',
        city: 'placeholder'
    })

    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
            { children }
        </UserContext.Provider>
    )
}