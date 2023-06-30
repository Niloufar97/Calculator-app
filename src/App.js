
import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css"
function App() {
  let [result , setResult] = useState("")
  let [hasDot, setHasDot] = useState(false)
  let [preOperand, setPreOperand] = useState('')
  let oprators = ['+' , '-', '*', '/']

  const showOutput = (e)=>{
    let input = e.target.innerText
    if(input === "."){
      if (hasDot === true) return
      else setHasDot(true)
    }
    if(oprators.includes(input))
      setHasDot(false)

    setResult(result + input)
  }
const acBtn = () =>{
  setResult("")
  setHasDot(false)
}
const delBtn = () =>{
  if(result.endsWith('.'))
    setHasDot(false)
  setResult(result.slice(0, -1))
}
const equalBtn = () =>{
  setPreOperand(result)
  setResult(String(evaluate(result)))
  setHasDot(false)
}
  return(<div className="calculator-grid">
  <div className="output">
    <div className="previous-operand">{preOperand}</div>
    <div className="current-operand">{result}</div>
  </div>
  <button className="span-two" onClick={acBtn}>AC</button>
  <button onClick={delBtn}>DEL</button>
  <button onClick={showOutput}>/</button>
  <button onClick={showOutput}>7</button>
  <button onClick={showOutput}>8</button>
  <button onClick={showOutput}>9</button>
  <button onClick={showOutput}>*</button>
  <button onClick={showOutput}>4</button>
  <button onClick={showOutput}>5</button>
  <button onClick={showOutput}>6</button>
  <button onClick={showOutput}>+</button>
  <button onClick={showOutput}>1</button>
  <button onClick={showOutput}>2</button>
  <button onClick={showOutput}>3</button>
  <button onClick={showOutput}>-</button>
  <button onClick={showOutput}>0</button>
  <button onClick={showOutput}>.</button>
  <button onClick={equalBtn} className="span-two">=</button>
</div>)
}
export default App;
