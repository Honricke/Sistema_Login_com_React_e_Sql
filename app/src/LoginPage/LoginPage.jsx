import React, { useContext } from 'react'
import './LoginPage.css'
import TextInput from '../TextInput/TextInput'
import {AuthContext} from "../context/auth"


function App() {
    const {authenticated,loger} = useContext(AuthContext)

	const getValues = (e) => {
		e.preventDefault()
		loger(e.target[0].value,e.target[1].value)
	}

	return ( 
		<>
			<p>{String(authenticated)}</p>
			<form onSubmit={getValues} action="#">
				<TextInput message={["Login","text"]}/>
				<TextInput message={["Senha","password"]}/>
				<button className='botao' type='submit'>Enviar</button>
			</form>
			<a href='./cadastro.html'></a>
		</>
	)
}

export default App;