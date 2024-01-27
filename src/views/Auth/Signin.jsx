import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage, SocialLogin } from "../../Components/Common";
import { FORGOT_PASSWORD, SIGNUP } from "../../constants/routes";
// MUI imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import Done from "@mui/icons-material/Done";

import { signIn } from "../../Redux/actions/auth_actions";
// import signImage from "../../Assets/Images/signupin/signin.jpeg";
// import signImage from "../../Assets/Images/signupin/background2.svg";
// import teamSpirit from "../../Assets/Images/signupin/undraw_team_spirit_re_yl1v.svg";
import { useDocumentTitle, useScrollTop } from "../../hooks";
import {
  setAuthenticating,
  setAuthStatus,
} from "../../Redux/actions/misc_actions";
import { LoadingOutlined } from "@ant-design/icons";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Signin = () => {
  useScrollTop();
  useDocumentTitle("Sign In | Uniben Marketplace");

  let navigate = useNavigate();
 
  const [displayAlert, setDisplayAlert] = useState(false);

  const { authStatus, isAuthenticating, loading, user, profile } = useSelector((state) => ({
    authStatus: state.app.authStatus,
    isAuthenticating: state.app.isAuthenticating,
    loading: state.app.loading,
    user: state.auth?.user,
    profile: state.profile
  }));

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    //do a form validation here. And if true send signin data to the service.
    dispatch(signIn(data.email, data.password));
  };

  useEffect(() => {
    setDisplayAlert(authStatus?.message);
    if(authStatus?.success === true){
      console.log(user)
      console.log("---------------")
      console.log(authStatus)
      console.log("---------------")
      console.log(profile)
      //   navigate("/seller/dashboard");
      // window.location.reload();
    }
    dispatch(setAuthStatus(null));
    dispatch(setAuthenticating(false));
    
  }, [dispatch,authStatus, navigate, user, profile]);

  const onClickLink = (event) => {
    if (isAuthenticating) event.preventDefault();
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDisplayAlert(false);
  };

  return (
    <Box
      sx={{
        // backgroundImage: `url('${teamSpirit}')`,
        backgroundRepeat: "no-repeat",
        // backgroundColor: "secondary.main",
        backgroundSize: "100%",
        backgroundPosition: 'center',
        marginTop: { sm: "-2.5rem", xs: "1rem"},
        padding: { sm: "3rem 0", xs: "0" },
      }}
    >
      <Box>
      <div>
        <Snackbar
          open={displayAlert}
          autoHideDuration={4000}
          onClose={handleCloseAlert}
        >
          <Alert onClose={handleCloseAlert} severity={authStatus?.success === true ? "success": "warning" }sx={{width: "100%"}}>
            {authStatus?.message}
          </Alert>
        </Snackbar>
      </div>
      </Box>
      <Grid container component="main">
        {/* <div>{message? message: ''}</div> */}
        <Grid
          item
          xs={false}
          sm={5}
          md={8}
          sx={{ display: { xs: "none", sm: "inline-block" } }}
        ></Grid>
        <Grid item xs={12} sm={3} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 6,
              mx: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                backgroundColor: authStatus ? "#75cb79" : "tertiary.main",
              }}
            >
              {authStatus ? <Done /> : null}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>

            {/* // The Signing Form */}
            {/* ----------------------------- */}

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(handleFormSubmit)}
              sx={{ width: { xs: "85%", sm: "90%" } }}
            >
              <div>
                <TextField
                  disabled={loading}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  {...register("email", { required: true })}
                  autoComplete="email"
                  autoFocus
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email?.type === "required" && (
                  <ErrorMessage role="alert">*Email is required</ErrorMessage>
                )}
              </div>
              <div>
                <TextField
                  disabled={loading}
                  margin="normal"
                  required
                  fullWidth
                  {...register("password", { required: true })}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  aria-invalid={errors.password ? "true" : "false"}
                />

                {errors.password?.type === "required" && (
                  <ErrorMessage role="alert">
                    *Password is required
                  </ErrorMessage>
                )}
              </div>
              {/* <FormControlLabel
                          control={<Checkbox value="remember" color="primary"/>}
                          label="Remember me"
                          /> */}
              <Button
                type="Submit"
                disabled={loading}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'tertiary.main'}}
              >
                {loading ? "Signing In" : "Sign In"}
                &nbsp;
                {loading ? <LoadingOutlined /> : null}
              </Button>
              <Link
                onClick={onClickLink}
                href={FORGOT_PASSWORD}
                variant="body1"
                color="tertiary.main"
              >
                Forgot Password?
              </Link>
              <br />
              Dont have an account?{" "}
              <Link href={SIGNUP} variant="body1" color="tertiary.main" >
                Sign Up
              </Link>
              <br />
              <br />
              <Box>
                <SocialLogin isLoading={loading} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Signin;
