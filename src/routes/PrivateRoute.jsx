import { Navigate } from "react-router-dom"
import { AUTH } from "../constants/routes"


export const PrivateRoutes = (props) => {
    let { children, username } = props;
    return(
        <div>
            {username ? {children}
            : <Navigate to={AUTH} state={{from: props.location}}/>}
        </div> 
    )
    
}