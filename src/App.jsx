
import './App.module.css'

import {useState} from 'react'

function App() {

  const[numero1,setNumero1] = useState()
  const[numero2,setNumero2] = useState()

  const[respSoma,setRespSoma] = useState()
  const[respSub,setRespSub] = useState()
  const[respMulti,setRespMulti] = useState()
  const[respDiv,setRespDiv] = useState()

const soma = () => setRespSoma(parseFloat(numero1) + parseFloat(numero2))
const sub = () => setRespSub(parseFloat(numero1) - parseFloat(numero2))
const multi = () => setRespMulti(parseFloat(numero1) * parseFloat(numero2))
const div = () => setRespDiv(parseFloat(numero1) / parseFloat(numero2))
  return (
    <>
      <h1>Calculadora</h1>
      <div>
        <label htmlFor="n1">Digite um número</label>
        <input type="number" id='n1' value={numero1} onChange={(e) => setNumero1(e.target.value)} />
</div>
<br />
<div>
        <label htmlFor="n2">Digite um número</label>
        <input type="number" id='n2' value={numero2} onChange={(e) => setNumero2(e.target.value)} />

      </div>
      <div>
       
       <div>
        <h2>Resuldado da Soma</h2>
        {respSoma}
        <button onClick={soma}>Somar</button>
       </div>

        <div>
        <h2>Resuldado da Subtração</h2>
        {respSub}
        <button onClick={sub}>Subtrair</button>
       </div>

        <div>
        <h2>Resuldado da Multiplicação</h2>
        {respMulti}
        <button onClick={multi}>Multiplicar</button>
       </div>

        <div>
        <h2>Resuldado da Divisão</h2>
        {respDiv}
        <button onClick={div}>Dividir</button>
       </div>

      </div>
    </>
  )
}

export default App
