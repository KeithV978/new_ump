import { Navigate } from "react-router-dom"
import { PROFILE } from "../constants/routes"


export const RestrictedRoute = (props) => {
    let { children, username, role } = props;
    // console.log(username, role)
    // const navigate = useNavigate();
    return(
        <div>
            {username && role === "ADMIN" ? {children}
            : <Navigate to={PROFILE} state={{from: props.location}}/>}
        </div> 
    )
    
}