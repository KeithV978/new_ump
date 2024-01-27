import * as React from "react"
import { styled } from "@mui/material"
import { InputWrapper } from "../InputHelper"

const TextInput = (props) => {
      
    const {
        unit, 
        label, 
        id, 
        // placeholder, 
        // list, 
        labelIcon,
        // defaultValue,
        // reg,
        typ
    } = props;

  const StyledInput = styled('input')(() => ({
    width: '100%',
    // padding:".5rem", 
    fontSize: '1rem',
    backgroundColor: 'transparent', 
    // backgroundColor: "#fff", 
    borderRadius: '40px',
    border: 'none', 
    outline: 'none',
    color: '#505050'
  })) 
  
    return (
        <React.Fragment>
            <label htmlFor={id} style={{ color: '#999999'}}>{labelIcon} {' '} {label}</label>
            <InputWrapper>
                <StyledInput 
                    // id={id} 
                    type={typ? typ : "text" }
                    // placeholder={placeholder}
                    // defaultValue={defaultValue}
                    {...props}
                    />
                <span style={{color: 'grey', backgroundColor: 'transparent'}}>{unit? <span>{unit}</span>: null}</span>     
            </InputWrapper>           
        </React.Fragment>
    )
}
export default TextInput;