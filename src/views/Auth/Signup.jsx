import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

// MUI imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
// import Checkbox  from "@mui/material/Checkbox"
// import  FormControlLabel  from "@mui/material/FormControlLabel"
import { Collapse, IconButton, styled } from "@mui/material";

import LockOutlined from "@mui/icons-material/LockOutlined";
import { signUp } from "../../Redux/actions/auth_actions";
import signImage from "../../Assets/Images/signupin/signup.jpeg";
import { useDocumentTitle, useScrollTop } from "../../hooks";
import {
  setAuthenticating,
  setAuthStatus,
} from "../../Redux/actions/misc_actions";
import { LoadingOutlined } from "@ant-design/icons";
import { SocialLogin } from "../../Components/Common";
import { Close } from "@mui/icons-material";
import { SIGNIN } from "../../constants/constants";
// import { WarningRounded } from "@mui/icons-material";

const ErrorMessage = styled("p")(() => ({
  color: "red",
  fontSize: "1rem",
  margin: 0,
}));



const schema = yup
  .object().shape({
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required('Password is required')
  })

const Signup = () => {
  useScrollTop();
  useDocumentTitle("Signup | Uniben Marketplace");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(true);
  const { isAuthenticating, authStatus, loading } = useSelector((state) => ({
    isAuthenticating: state.app.isAuthenticating,
    authStatus: state.app.authStatus,
    loading: state.app.loading,
  }));

  // const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(
    () => () => {
      dispatch(setAuthStatus(null));
      dispatch(setAuthenticating(false));
      // console.log(profile)
    },
    [dispatch, loading]
  );

  const handleOnSubmit = (data) => {
    // return console.log(data)
    // let { fullname, email, phone, password } = data;

    dispatch(signUp(data));
    // .then(() => {
    //   navigate("/seller/dashboard");
    //   window.location.reload();
    // })
    // .catch(() => {
    // });
  };

  const [displayAlert, setDisplayAlert] = useState(false);

  useEffect(() => {
    // console.log(authStatus)
    if(authStatus?.message) setDisplayAlert(true);
    
    if (authStatus?.success === true) {
      setInterval(() => {
        navigate("/signin");
        window.location.reload();
      }, 6000);
    }
  }, [authStatus, navigate]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <Box component="main">
      <Grid container>
        <Grid
          item
          xs={false}
          sm={5}
          md={8}
          sx={{
            backgroundImage: `url('${signImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "secondary.main",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />
        <Grid item xs={12} sm={7} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 9,
              mx: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, backgroundColor: "tertiary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <br />
            <br />

            <Collapse in={displayAlert}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => setDisplayAlert(false)}
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
                variant="outlined"
                severity={authStatus?.success === true ? "success" : "warning"}
                sx={{ width: "100%" }}
              >
                {authStatus?.message}
              </Alert>
            </Collapse>

            {/* // The Signing Form */}
            {/* ----------------------------- */}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(handleOnSubmit)}
              sx={{ mt: 1 }}
            >
              <div>
                <TextField
                  margin="normal"
                  disabled={isAuthenticating}
                  fullWidth
                  id="sellers_name"
                  label="Seller's Name"
                  autoComplete="Full Name"
                  autoFocus
                  {...register("sellers_name", { required: true })}
                  aria-invalid={errors.sellers_name ? "true" : "false"}
                />
                {errors.sellers_name?.type === "required" && (
                  <ErrorMessage role="alert">
                    *Seller's name is required
                  </ErrorMessage>
                )}
              </div>
              <div>
                <TextField
                  margin="normal"
                  disabled={isAuthenticating}
                  fullWidth
                  id="email"
                  label="email"
                  autoComplete="email"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email?.type === "required" && (
                  <ErrorMessage role="alert">*Email is required</ErrorMessage>
                )}
              </div>
              <div>
                <TextField
                  margin="normal"
                  disabled={isAuthenticating}
                  fullWidth
                  id="phone"
                  label="phone"
                  autoComplete="phone"
                  {...register("phone", { required: true })}
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone?.type === "required" && (
                  <ErrorMessage role="alert">*Phone is required</ErrorMessage>
                )}
              </div>
              <div>
                <TextField
                  margin="normal"
                  disabled={isAuthenticating}
                  fullWidth
                  label="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register("password", { required: true })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password?.type === "required" && (
                  <ErrorMessage role="alert">
                    *Password is required
                  </ErrorMessage>
                )}
              </div>
              {/* <div>
                  <FormControlLabel
                        control={<Checkbox value="agree" onChange={() => setLoading(prev => !prev)} color="primary"/>}
                        label={`I agree to the Terms & Condition`}
                        />
                </div> */}
              <Button
                type="Submit"
                disabled={isAuthenticating}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "tertiary.main" }}
              >
                {isAuthenticating ? "Please Wait..." : "Sign Up"}
                &nbsp;
                {isAuthenticating ? <LoadingOutlined /> : null}
              </Button>

              <Typography>
                Already have an account?
                <Link href={SIGNIN} variant="body2" color="tertiary.main">
                  {" "}
                  Sign In
                </Link>
              </Typography>
              <br />
              <Box>
                <SocialLogin isLoading={isAuthenticating} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
