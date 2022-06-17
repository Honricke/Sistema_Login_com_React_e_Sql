import React, { useState } from 'react'
import './App.css'
import TextInput from './TextInput'

function App() {
	function getValues(e){
		e.preventDefault()
		console.log(e.target[0].value)
	}
	return (
		<>
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