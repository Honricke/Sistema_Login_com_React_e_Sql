import React, { useContext } from 'react'
import {AuthContext} from "../context/auth"


function App() {
    const {authenticated, logout} = useContext(AuthContext)

    const handleLogout = () =>{
        logout()
    }

	return ( 
		<>
			<p>Home Page</p>
            <p>{String(authenticated)}</p>
            <button onClick={handleLogout}></button>
		</>
	)
}

export default App;