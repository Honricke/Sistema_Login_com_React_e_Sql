import React, { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')

        if(recoveredUser){
            setuser(JSON.parse(recoveredUser))
        }

        setloading(false);
    },[])

    const loger = (login, password) => {
        console.log("login", {login,password})

        //api criar um session

        const loggedUser = {
            id: '123',
            login,
        }

        localStorage.setItem("user", JSON.stringify(loggedUser))

        if(password === "secret"){
            console.log("oi")
            setuser(loggedUser)
            navigate("/login")
        }
    };

    const logout = () => {
        console.log("logout")
        localStorage.removeItem('user')
        setuser(null)
        navigate("/")
    }

    return(
        <AuthContext.Provider
            value={{authenticated: !!user, user, loading, loger, logout}}
        >
            {children}
        </AuthContext.Provider>
    )
}