import React, { useContext } from 'react'
import AuthContext from './context'
import authStorage from './storage';


export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext)
    const logOut = () => {
        setUser(null)
        authStorage.removeToken()
    }

    const logIn = (token) => {
        setUser(token)
        authStorage.storeToken(JSON.stringify(token))
    }

    const setAvatar = (uri) => {
        let user2 = user
        user2.avatar = uri
        setUser(user2)
        authStorage.storeToken(JSON.stringify(user2))
    }
    return { user, setUser, logOut, logIn, setAvatar }
}