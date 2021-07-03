import React, {useState} from 'react'

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)

    const addToCounter = ()=>{

            setCounterValue(counterValue + inputValue)
    }

     const subtractCounter = ()=>{

            setCounterValue(counterValue - inputValue)
    }

    return (
        <div>

            <h3 data-testid="header">My Counter</h3>
            <h2 data-testid="counter" className={
                counterValue >=100 ? "green" : counterValue <=-100 ? "red" : null

            } >{counterValue}</h2>
            <button data-testid="subtract-btn" onClick={subtractCounter}>-</button>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(parseInt(e.target.value))} data-testid="input"/>
            <button data-testid="add-btn" onClick={addToCounter}>+</button>

           


        </div>
    )
}

export default Counter
