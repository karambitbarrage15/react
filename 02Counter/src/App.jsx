import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0)
  //let counter=15;
  const addValue=()=>{
    console.log("clicked",counter);
    setCounter(counter+1);
    //counter=counter+1;
    //console.log("Value Added:",Math.random());

  };
  const removeValue=()=>{
    setCounter(counter-1);
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value:{counter}</h2>
    <button onClick={addValue}>Add Value{counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value{counter}</button>



    </>

  )
}

export default App
