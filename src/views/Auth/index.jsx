import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

 const Auth = () => {
  const {isLoggedIn}  = useSelector((state) => state.auth);
  

  let navigate = useNavigate();

 useEffect(() => {
  if(!isLoggedIn) {
    navigate("/auth/signin");
    window.location.reload();
 }else{
  navigate('/author')
  window.location.reload();
 }
   
 }, [isLoggedIn])
 
  
}
export default Auth;