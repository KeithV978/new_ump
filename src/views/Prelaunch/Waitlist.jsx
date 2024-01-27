import * as React from "react";
import { styled, useTheme } from "@mui/material";

// import {motion} from 'framer-motion'

import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useDispatch } from "react-redux";

// import Person2 from "@mui/icons-material/Person2Rounded";
import Phone from "@mui/icons-material/Phone";

import { ErrorMessage } from "../../Components/Common";
import {
  HeartFilled,
  LoadingOutlined,
  CheckOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import AlternateEmail from "@mui/icons-material/AlternateEmail";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from "../../services/config";

const FormWrapper = styled(Box)(({ theme }) => ({
  // backgroundColor: "transparent",
  // height: "90vh",
  minWidth: "250px",
  maxWidth: "350px",
  // minHeight: "60vh",
  padding: "2rem 1rem",
  float: "right",
  width: "90%",
  marginTop: "4rem",
  marginBottom: "4rem",
  
  [theme.breakpoints.up("xs")]: {
    minHeight: "60vh",
    width: "90%",
    marginTop: "-2.5rem",
    marginBottom: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "50%",
    marginTop: "-5.5rem",
    marginBottom: "4rem",
  },
}));

const schema = yup
  .object()
  .shape({
    email: yup.string().required("Type in your email."),
    phone: yup.number("Type numbers only in this field").required("Your phone number is required").positive('Invalid number.')
    // .min(11, "Abeg your phone number no reach. Must be at least 11 digits.").max(11, "Abeg your phone number don too long, reduce am to less than 12."),
  })
  .required();

export const Waitlist = ({Socials}) => {
  const [loading, setLoading] = React.useState(false);
  const [useId, setUserId] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [progress, setProgress] = React.useState(
    "Please wait while we add you..."
  );
  const [existing, setExisting] = React.useState(false);

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  React.useEffect(() => {
    (() => {
      const waitlistRef = db.collection("waitlist");

      const unsubscribe = waitlistRef.onSnapshot((snapshot) => {
        setCount(snapshot.size);
      });

      return () => unsubscribe();
    })();
  }, [count, db]);

  // form submission
  const handleOnSubmit = async (data) => {
    setLoading(true);

    // add a zero at the front of all submitted phone numbers
    const setData = {...data, phone: "0" + data.phone} 

    try {
      // first check if the email already exists in the db
      const result = await db
        .collection("waitlist")
        .where("email", "==", setData.email)
        .get();

        // if the email doesn't exist
      if (!result?.docs[0]?.exists) {
        const user = await db.collection("waitlist").add(setData);

        // add the new details to the database (firestore)
        if (user.id) {
          setUserId(user.id);
          setProgress("You have now been added!");
          setLoading(false);
        }
      } else {
        // else if it does exist. Return the following message to the user.
        setProgress("This email already exists in our database.");
        setExisting(true);
      }
    } catch (error) {
      console.error("Error Adding document: ", error);
      setLoading(false);
      return;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const theme = useTheme();

  if (loading) {
    return ( 
      <FormWrapper component={Paper} elevation={24}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          {!existing ? (
            <LoadingOutlined
              style={{
                fontSize: "5rem",
                color: `${[theme.palette.tertiary.main]}`,
              }}
            />
          ) : (
            <ExclamationCircleOutlined
              style={{
                fontSize: "5rem",
                color: `${[theme.palette.tertiary.main]}`,
              }}
            />
          )}
          <Typography variant="h6" sx={{ color: `#707070` }}>
            {" "}
            {progress}{" "}
            </Typography>
        </div>
      </FormWrapper> 
    );
  } else if (useId) {
    return (
      <FormWrapper component={Paper} elevation={24}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <CheckOutlined
            style={{
              fontSize: "5rem",
              color: `${[theme.palette.tertiary.main]}`,
            }}
          />
          <Typography variant="h6" sx={{ color: `#707070` }}>
            {progress} <br /> Welcome onboard
            {progress === "You have now been added!" &&(
              <Typography variant="h6" sx={{ color: `#707070`, margin: '.5rem 0' }}>
                Now follow us on social media
                <br/>
                {Socials}
              </Typography>
            )} 
          </Typography>
        </div>
      </FormWrapper>
    );
  } else {
    return ( 
      <FormWrapper component={Paper} elevation={24}>
        <Typography sx={{ fontSize: ".9rem", textAlign: "center" }}>
          Join our waitlist
        </Typography>
        <br/>
        <Typography
          sx={{ fontSize: ".7rem", textAlign: "left", color: "#9e9e9e" }}
        >
          Join the community of sellers in Uniben.
        </Typography>
        <Typography
          sx={{ fontSize: ".7rem", textAlign: "left", color: "#9e9e9e" }}
        >
          Many benfits awaits our <strong>first 200</strong> subscribers.
        </Typography>
        {/* <br /> */}
        <br />
        <Divider />

        <Typography
          sx={{ fontSize: ".7rem", textAlign: "left", color: "#9e9e9e", display: 'none' }}
        >
          <i>
            We currently have <strong> {count && count}</strong> number of
            subscribers.
          </i>
        </Typography>
        <br />
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
                  <ErrorMessage role="alert">
                    {errors.email?.message}
                  </ErrorMessage>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  // variant="standard"
                  label="Phone*"
                  {...register("phone")}
                  placeholder="e.g 08123xxxxxx"
                  id="phone"
                  type="phone"
                  defaultValue={0}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone
                          sx={{
                            color: "tertiary.main",
                            fontSize: { xs: "1rem", sm: ".9rem" },
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.phone?.message && (
                  <ErrorMessage role="alert">
                    {errors.phone?.message}
                  </ErrorMessage>
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
                    disabled={loading}
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: `${[theme.palette.tertiary.main]}`,
                      padding: "0.4rem 3rem",
                      width: { sm: "fit-content", xs: "100%" },
                      borderRadius: "5px",
                    }}
                  >
                    Lets go!
                    {/* {!loading ? (
                     
                    ) : (
                      <LoadingOutlined
                        style={{ color: `${[theme.palette.tertiary.main]}` }}
                      />
                    )} */}
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
    );
  }
};
