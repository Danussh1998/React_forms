
import './FormInput.css'
import { useState } from 'react';
const FormInput = (props) =>{
    const [focused , setFocused] = useState(false);
    const {label, id,errormessage,onChange, ...input} = props

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label>{props.label}</label>
            <input {...input} onChange={onChange} onBlur = {handleFocus} focused1 = {focused.toString()} 
            onFocus={() => input.name ==='confirmpassword' && setFocused(true)}/>
            <span>{errormessage}</span>
        </div>
    )
}
export default FormInput