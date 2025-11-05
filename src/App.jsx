
import './App.module.css'

function App() {
  

  return (
    <>
      <h1>Calculadora</h1>
<div>
  <label htmlFor="n1">Digite um número</label>
  <input type="number" id ='n1'value={''} onChange={''}/>

   <label htmlFor="n2">Digite um número</label>
  <input type="number" id ='n2'value={''} onChange={''}/>
</div>
     
    </>
  )
}

export default App
