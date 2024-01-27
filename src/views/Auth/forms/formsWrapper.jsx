import * as React from "react";
// import * as yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material";

import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch } from "react-redux";

// import Person2 from "@mui/icons-material/Person2Rounded";

import { FormErrorMessage } from "../../../components/common";
import AlternateEmail from "@mui/icons-material/AlternateEmail";
import Password from "@mui/icons-material/Password";
import { HeartFilled } from "@ant-design/icons";
import { useTheme } from "@emotion/react";

const FormWrapper = styled(Box)(({ theme }) => ({
  // backgroundColor: "transparent",
  // height: "90vh",
  minWidth: "250px",
  maxWidth: "350px",
  // minHeight: "60vh",
  padding: "2rem 1rem",

  [theme.breakpoints.up("xs")]: {
    minHeight: "60vh",
    width: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
}));

// const schema = yup
//   .object()
//   .shape({
//     email: yup.string().required("Type in your email."),
//     password: yup.required("Your password is required"),
//     // .min(11, "Abeg your phone number no reach. Must be at least 11 digits.").max(11, "Abeg your phone number don too long, reduce am to less than 12."),
//   })
//   .required();

export const FormsWrapper = () => {
  const handleOnSubmit = async (data) => {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });
  const theme = useTheme();

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "center",
          color: "#fff",
          marginBottom: "1rem",
        }}
      >
        <Button
          sx={{
            color: "inherit",
            borderBottom: `1px solid ${[theme.palette.secondary.main]}`,
            borderRadius: "0px",
          }}
        >
          Signup
        </Button>
        <Button sx={{ color: "inherit", borderRadius: "0px" }}>Signin</Button>
      </div>
      <FormWrapper component={Paper} elevation={24}>
        <div style={{ padding: "0 .4rem" }}>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  // focused={true}
                  label="Email*"
                  {...register("email")}
                  placeholder="e.g example@mail.com"
                  id="email"
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmail
                          sx={{
                            color: "tertiary.main",
                            fontSize: { xs: "1rem", sm: ".9rem" },
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.email?.message && (
                  <FormErrorMessage role="alert">
                    {errors.email?.message}
                  </FormErrorMessage>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  // variant="standard"
                  label="Password*"
                  {...register("password")}
                  id="password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Password
                          sx={{
                            color: "tertiary.main",
                            fontSize: { xs: "1rem", sm: ".9rem" },
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.password?.message && (
                  <FormErrorMessage role="alert">
                    {errors.password?.message}
                  </FormErrorMessage>
                )}
              </Grid>

              <Grid item xs={12}>
                <Box
                  style={{
                    display: "grid",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Button
                    // fullWidth
                    type="submit"
                    variant="contained"
                    // disabled={loading}
                    // color="seconary"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: `${[theme.palette.secondary.main]}`,
                      padding: "0.4rem 3rem",
                      width: { sm: "fit-content", xs: "100%" },
                      borderRadius: "5px",
                    }}
                  >
                    Signup
                  </Button>
                </Box>
                <br />
                <Divider />

                <Typography sx={{ fontSize: ".7rem", marginTop: "1rem" }}>
                  Made by uniben students, for uniben students. <HeartFilled />
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </FormWrapper>
    </div>
  );
};
