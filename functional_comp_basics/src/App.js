
import './App.css';
import StateHookWIthObjects from './StateHookWIthObjects';
import UseStateHook from './UseStateHook';
import UseStateHookArrays from './UseStateHookArrays';
import FormInput from './Components/FormInput';
import React, { useState } from "react";




const App = ()  => {
  const [values , setValues] = useState({
    username : "",
    email : "",
    birthday :"",
    password : "",
    confirmpassword : ""
  });

  const inputs = [
  {
    id : '1',
    name : 'username',
    type : 'text',
    placeholder : 'Username',
    errormessage : 'Username should not be less that 3-15 characters and should not include special characters',
    label : 'Username',
    pattern : `^[A-Za-z0-9]{3,15}$`,
    required : true
  },
  {
    id : '2',
    name : 'birthday',
    type : 'date',
    placeholder : 'Birthday',
    label : 'Birthday'
  },
  {
    id : '3',
    name : 'email',
    type : 'email',
    placeholder : 'Email',
    errormessage : 'Enter valid email address',
    label : 'Email',
    required : true
  },
  {
    id : '4',
    name : 'password',
    type : 'password',
    placeholder : 'Password',
    errormessage : 'Password should be 3-15 characters and should include 1 letter 1 number and 1 special character',
    label : 'Password',
    patter : `^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$`,
    required : true
  },
  {
    id : '5',
    name : 'confirmpassword',
    type : 'password',
    placeholder : 'ConfirmPassword',
    errormessage : 'Passwords do not match',
    label : 'ConfirmPassword',
    pattern : values.password,
    required : true
  }
]
  const handlesubmit=(e)=> {
      e.preventDefault();
  }

  const onChange = (e) => {
      setValues({...values , [e.target.name]:e.target.value})
  }
  return (
    <div className="app">
     <form onSubmit={handlesubmit}>
      <h1>Register</h1>
      {inputs.map((input) => 
          <FormInput key={input.id} 
          {...input} 
          value = {values[input.name]} 
          onChange={onChange}></FormInput>
      )}

     <button>Submit</button>
     </form>
    </div>
  );
}

export default App;
