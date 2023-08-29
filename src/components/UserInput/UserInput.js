import { useState } from "react";

const inituakUserInput = {
    'current-savings':10000,
    'yearly-contribution':1200,
    'expected-return':7,
    'duration': 10
}

function UserInput(props){

    const [userInput, setUserInput] = useState(inituakUserInput);

    const submitHandler = (event)=>{
        event.preventDefault();
        props.onCalculate(userInput)
    }

    const resentHandler= ()=>{
        setUserInput(inituakUserInput)
    }

    const inputChangeHandler = (input, value)=>{
        setUserInput((prevInput)=>{
            return{
                ...prevInput, 
                [input] : +value
            }
        })

    }

    return (
    <form className="form" onSubmit={submitHandler}>
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input onChange={(event)=>{
            inputChangeHandler('current-savings',event.target.value)
            }}  type="number" value={userInput['current-savings']} id="current-savings" />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number" onChange={(event)=>{
            inputChangeHandler('yearly-contribution',event.target.value)
            }} value={userInput['yearly-contribution']} id="yearly-contribution" />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input onChange={(event)=>{
            inputChangeHandler('expected-return',event.target.value)
            }} value={userInput['expected-return']} type="number" id="expected-return" />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input onChange={(event)=>{
            inputChangeHandler('duration',event.target.value)
            }} value={userInput['duration']} type="number" id="duration" />
      </p>
    </div>
    <p className="actions">
      <button type="reset" onClick={resentHandler} className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>)
}

export default UserInput;
     
     