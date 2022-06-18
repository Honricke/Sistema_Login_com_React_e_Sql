import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom"

import React, { useContext } from "react";
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage'

import { AuthProvider, AuthContext }  from "./context/auth"

const AppRouter = () => {
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext)

        if(loading){
            return <div className="loadgin">Carregando</div>
        }

        if(!authenticated){
            return <Navigate to="/"/>
        }

        return children
    }

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<LoginPage />}/>
                    <Route exact path="/login" element={<Private><HomePage/></Private>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRouter;