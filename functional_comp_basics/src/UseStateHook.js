import React, { useState } from 'react'

function UseStateHook() {
    const initialCount = 0
   const [count , setCount] =  useState(initialCount);
  return (
    <div>
    count = {count}
    <button onClick={() => setCount((prevCount => prevCount-1))}>Decrement</button>
    <button onClick={() => setCount(initialCount)}>Reset</button>
    <button onClick={() => setCount(prevCount => prevCount+1)}>Increment </button>
    </div>
  )
}
export default UseStateHook

//setCount will accept prevCount i.e previous state as the parameter