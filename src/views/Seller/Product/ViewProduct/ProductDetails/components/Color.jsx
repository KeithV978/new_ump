import { styled } from "@mui/material";

const Color = ({ color}) => {
    const Color = styled('div')(()=>({
        height: '.9rem',
        width: '.9rem',
        // border: '.1rem solid #ccc',
        borderRadius: '50%'
      }))

  return (
    
      <Color sx={{ backgroundColor: color }} />
  );
};

export default Color;
