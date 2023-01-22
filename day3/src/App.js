import './App.css';
import React  from 'react';
import { useState } from 'react';
import { Store } from './Redux/store';
function App() {
  const {dispatch,getState,subscribe}=Store;
  const { count } = getState();
  const[forceUpdate,setForceUpdate]=useState(0);

  subscribe(()=>{
    console.log("Inside Subscribe",Store.getState())
    setForceUpdate((prev)=>prev+1);
  })
  const addHandler = () => {
    // setCount((prev)=>prev+1);
    dispatch({type:"Reduce",payload:2})
  };
  const reduceHandler = () => {
    // setCount((prev)=>prev-1);
    dispatch({type:"Reduce",payload:1})

  }
  console.log("re-rendring component")
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={addHandler}>Add</button>
      <button onClick={reduceHandler}>Reduce</button>
    </div>
  );
}

export default App;
