import React from "react"
import {useState} from "react"
import "./styles.css"

const App = () =>{
  const [operationValue, setOperationValue] = useState("")
  const [result, setResult] = useState(0)

  function handleChange(event){
    const {name, value, isOperator} = event.target
    setOperationValue(prevValue => {
      return prevValue + value
    })
  }

  function calculateResult(){
    setResult(eval(operationValue))
    setOperationValue("")
  }
  function resetCalculator(){
    setOperationValue("")
    setResult(0)
  }
  return(
    <div className="container">
      <div className="calculator">
        <div className="display">
          <div className="display-operation">{operationValue}</div>
          <div className="display-result">{result}</div>
        </div>
        <div className="row">
          <button 
            onClick={handleChange}
            name="7"
            value="7"
          >7</button>
          <button
            onClick={handleChange}
            name="8"
            value="8"
          >8</button>

          <button
            onClick={handleChange}
            name="9"
            value="9"
          >9</button>

          <button
            onClick={handleChange}
            name="÷"
            value="÷"
            isOperator={true}
          >÷</button>

        </div>

        <div className="row">
          <button 
            onClick={handleChange}
            name="4"
            value="4"
          >4</button>
          <button
            onClick={handleChange}
            name="5"
            value="5"
          >5</button>

          <button
            onClick={handleChange}
            name="6"
            value="6"
          >6</button>

          <button
            onClick={handleChange}
            name="*"
            value="*"
          >*</button>

        </div>

        <div className="row">
          <button 
            onClick={handleChange}
            name="1"
            value="1"
          >1</button>
          <button
            onClick={handleChange}
            name="2"
            value="2"
          >2</button>

          <button
            onClick={handleChange}
            name="3"
            value="3"
          >3</button>

          <button
            onClick={handleChange}
            name="+"
            value="+"
          >+</button>

        </div>

        <div className="row">
          <button 
            onClick={handleChange}
            name="."
            value="."
          >.</button>
          <button
            onClick={handleChange}
            name="0"
            value="0"
          >0</button>

          <button
            onClick={calculateResult}
            name="="
            value="="
          >=</button>

          <button
            onClick={handleChange}
            name="-"
            value="-"
          >-</button>

        </div>
        <div className="row reset">
        <button onClick={resetCalculator}>DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default App