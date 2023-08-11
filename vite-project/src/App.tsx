import { useEffect, useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [contador, setContador] = useState(0)
  const [nome1, setNome1] = useState("Igor")
  const [nome2, setNome2] = useState("Pedro")
  const nomesJuntos = nome1 + " + " + nome2


  function soma(){
    setContador(
      (antigo)=> {
        return antigo + 1
      }
    )
  }

  function original(){
    setContador(
      (antigo)=> {
        return 0
      }
    )
  }

  function subtrai(){
    setContador(
      (antigo)=> {
          return antigo - 1
      }
    )
  }
/*
  function mudaNome1(evento: React.ChangeEvent<HTMLInputElement>){
    setNome1(evento.target.value)
  }

  function mudaNome2(evento: React.ChangeEvent<HTMLInputElement>){
    setNome2(evento.target.value)
  }

      <input type='text' value={nome1} onChange={mudaNome1}></input>
    <br/>
    <input type='text' value={nome2} onChange={mudaNome2}></input>

*/

  return (
    
    <div id='oi' className='oi'>
      
    <hr/>
    
    <h1>Contador</h1>

    <p> {contador} </p>
  
    <button onClick={soma}> + </button>
    <button onClick={original}>Zerar</button>
    <button onClick={subtrai}> - </button>
    <hr/>
   
    </div>


  )
}

export default App
