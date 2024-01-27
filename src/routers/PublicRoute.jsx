import { SIGNIN, SIGNUP } from "../constants/routes";
import PropType from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

const PublicRoute = (props) => {
  const [sellerId, setSellerId] = useState('')
  const { profile } = useSelector((state) => ({
    profile: state.profile
  }));

  useEffect(() => {
    if(profile?.sellerId)setSellerId(profile.sellerId);
    
  }, [profile])
  
   const { from } = props?.location?.state || { from: { pathname: "/seller/dashboard"} };
    //   console.log(props)
    if (sellerId && (props.path === SIGNIN || props.path === SIGNUP)) {
        return <Navigate to={from} />;
      }

      return (
        <Box> 
            {props.children}
        </Box>
      ); 
}


PublicRoute.defaultProps = {
  sellerId: "",
  // role: 'SELLER',
  path: "/",
};

PublicRoute.propTypes = {
  sellerId: PropType.string, 
  path: PropType.string,
  rest: PropType.any,
};
 
export default PublicRoute;
