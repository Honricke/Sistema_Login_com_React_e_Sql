import React, { useContext } from 'react'
import './App.css'
import LoginPage from "./LoginPage/LoginPage"
import {AuthContext} from "./context/auth"

function App() {
    const {authenticated,loger} = useContext(AuthContext)

	const getValues = (e) => {
		e.preventDefault()
		loger(e.target[0].value,e.target[1].value)
	}

	return ( 
		<>
			<LoginPage/>
		</>
	)
}

export default App;