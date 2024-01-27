import { styled } from "@mui/material";

const InputWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '40px',
    padding:".7rem 1rem", 
    backgroundColor: '#fff', 
    // backgroundColor: alpha(theme.palette.primary.light, 0.24), 
    // borderWidth: '2px',
    // borderStyle: 'solid',
    // borderImage: 'linear-gradient(top right, #C736BF,  #36BFC7)', 
    border: '1px solid #dadada',
    outline: 'none'
  }))

  export default InputWrapper;