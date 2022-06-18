import React, { useState} from "react";
import './TextInput.css';

function TextInput(text){
    const [valor, setvalor] = useState("");

    const testValidate = (e) => {
        setvalor(e.target.value)
        if(e.target.value !== ""){
            e.target.setAttribute("className","valido")
        }
        else if(e.target.value === ""){
            e.target.removeAttribute("className")
        }
    }
    return (
        <div id="text-container">
            <input id={text.message[0]} type={text.message[1]} autoComplete="off" onChange={testValidate} value={valor}/>
            <label htmlFor={text.message[0]}>{text.message[0]}</label>
        </div>
    )
}

export default TextInput;