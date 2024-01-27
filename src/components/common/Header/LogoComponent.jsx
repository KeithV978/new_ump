import { Typography, styled } from "@mui/material";
import logo from "../../../assets/images/logo/ump_logo.svg";
import { Link } from "react-router-dom";

const LogoHolder = styled('div')(()=>({
    width: '30px',
    height: '30px',
    backgroundImage: `url('${logo}')`,
    backgroundSize: 'contain',
    marginRight: '.5rem'
}))

export const LogoComponent = () => {
  return (
   <Link to="/">
    <div
      style={{
        // width:'35%',
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'
        // justifyContent: "center",
      }}>
    <LogoHolder/> 
    <Typography color="#370066" sx={{display: {sm:'block', xs: 'none'}, letterSpacing: '.2rem'}}>
    {' Uniben Marketplace '}        
    </Typography>
    </div>
   </Link>
  );
};
