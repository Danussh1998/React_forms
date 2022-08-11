import React, { useState } from "react";

  function StateHookWIthObjects() {
    const [name , setName] = useState({firstName : '' , lastName : ''});
    const [show, setShow] =useState(false);
    const hello =(e)=>{
        e.preventDefault();
        setShow(true);
        console.log(name.firstName);
        console.log(name.lastName);
    }

  return (
    <form onSubmit={(e)=>hello(e)}>
         
        <input type = 'text' value={name.firstName} onChange={e =>setName({...name,firstName : e.target.value})}></input>
        <input type = 'text' value={name.lastName}  onChange={e =>setName({...name,lastName : e.target.value})}></input>
        <label>Resume</label>
        <input type = "file" placeholder="Select a resume"></input>
        <h2 style={show?{visibility:"visible"}:{visibility: "hidden"}}>First Name - {name.firstName}</h2>
        <h2 style={show?{visibility:"visible"}:{visibility: "hidden"}}>Last Name - {name.lastName}</h2>
        <button type="submit" >submit</button>   

        
    </form>
  )
}

export default StateHookWIthObjects
