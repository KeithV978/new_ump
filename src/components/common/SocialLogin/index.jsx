// import { FacebookOutlined, GithubFilled, GoogleOutlined } from '@ant-design/icons';
import FacebookTwoTone from "@mui/icons-material/FacebookTwoTone";
import Google from "@mui/icons-material/Google";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropType from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import {
  signInWithFacebook,
  signInWithGoogle,
} from "../../../Redux/actions/auth_actions";

const SocialLogin = ({ isLoading }) => {
  const dispatch = useDispatch();

  const onSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
  };

  const onSignInWithFacebook = () => {
    dispatch(signInWithFacebook());
  };

  return (
    <Box>
      <Typography variant="h6" textAlign="center" color="#ccc">
        OR CONTINUE WITH
      </Typography>
      <Button
        type="Submit"
        fullWidth
        variant="outlined"
        sx={{
          mt: 3,
          mb: 1,
          fontWeight: "bold",
          borderRadius: "5px",
          borderColor: "#ccc",
        }}
        disabled={isLoading}
        onClick={onSignInWithGoogle}
      >
        <Google sx={{ color: "#ff3e30" }} />{" "}
        <span style={{ color: "#176bef" }}>G</span>
        <span style={{ color: "#ff3e30" }}>O</span>
        <span style={{ color: "#f7b529" }}>O</span>
        <span style={{ color: "#176bef" }}>G</span>
        <span style={{ color: "#179c52" }}>L</span>
        <span style={{ color: "#ff3e30" }}>E</span>
      </Button>{" "}
      <Button
        type="Submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#3b5998", borderRadius: "5px" }}
        disabled={isLoading}
        onClick={onSignInWithFacebook}
      >
        <FacebookTwoTone />
        Facebook
      </Button>
    </Box>
  );
};

SocialLogin.propTypes = {
  isLoading: PropType.bool.isRequired,
};
export default SocialLogin;
