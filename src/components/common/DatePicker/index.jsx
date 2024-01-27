import { styled } from "@mui/material";
import { Fragment } from "react";


const Input = styled("input")(() => ({
    border: 'none', 
    width: '100%', 
    padding: '.8rem', 
    borderRadius: '25px'
}))

const DatePicker = ({ minDate, maxDate}) => {
   return(
    <Fragment>
    <label htmlFor="expiry">Expiry</label>
    <Input id="expiry" type="date" minDate={minDate} maxDate={maxDate}/>
</Fragment>
   )
}

export default DatePicker;