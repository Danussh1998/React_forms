import React,{useState} from "react";


function UseStateHookArrays() {
    const [items, setItems] = useState([])
    const addItems = () => {
            //If we dont use the spread operator the original array will be overriden.
      setItems([...items,{
        id : items.length,
        value : Math.floor(Math.random() * 10) + 1
      }])   
    }
  return (
<div>
    <button onClick={addItems}>Click</button>
    <ul>
        {items.map(item => (
            <li key={item.id}>{item.value}</li>
        ))}
    </ul>
</div>
  )
}

export default UseStateHookArrays
