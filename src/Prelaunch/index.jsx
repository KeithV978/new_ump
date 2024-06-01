import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { motion } from "framer-motion";

import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

import prelaunch from "./prelaunch/lady_sitting.png";
import logo from "./prelaunch/Mark W.svg";
import logoO from "./prelaunch/Mark WO.svg";
import unibenLogo from "./prelaunch/uniben_logo.png";

import LocalDining from "@mui/icons-material/LocalDiningRounded";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";

import { Waitlist } from "./Waitlist";
import { Info } from "./Info";
import { TypeAnimation } from "react-type-animation";
import { WhatsApp } from "@mui/icons-material";
// import { Timer } from "./Timer";

const Wrapper = styled("div")(() => ({
  maxWidth: "2024px",
  backgroundColor: "rgb(2,0,36)",
  background:
    "linear-gradient(37.41093941545145deg, #580066 0.001%, #360066 10.943486355164818%, #020024 73.93569001873807%);",
  padding: "1.2rem 0 0 0",
}));

const StyledImg = styled("div")(({ theme }) => ({
  backgroundImage: `url(${prelaunch})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  // height: '100%',
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    // width: "100%"
  },
  [theme.breakpoints.down("xs")]: {
    width: "30%",
  },
}));

const Footer = styled("footer")(() => ({
  width: "100%",
  backgroundColor: "#141414",
  textAlign: "center",
  padding: "2rem 1rem 1rem 1rem",
  marginTop: "6rem",
}));

const StyledA = styled("a")(() => ({
  margin: "0 .2rem",
}));
const Socials = ({ colors, size }) => (
  <React.Fragment>
    <StyledA
      href="https://linkedin.com/company/circle-of-three-technologies/"
      target="_blank"
      rel="noreferrer"
    >
      <IconButton
        sx={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: colors,
          padding: ".4rem",
        }}
      >
        <LinkedIn sx={{ fontSize: "", color: colors, size: size }} />
      </IconButton>
    </StyledA>
    <StyledA
      href="https://instagram.com/uniben_market"
      target="_blank"
      rel="noreferrer"
    >
      <IconButton
        sx={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: colors,
          padding: ".4rem",
        }}
      >
        <Instagram sx={{ fontSize: "", color: colors, size: size }} />
      </IconButton>
    </StyledA>
    <StyledA
      href="https://twitter.com/uniben_market"
      target="_blank"
      rel="noreferrer"
    >
      <IconButton
        sx={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: colors,
          padding: ".4rem",
        }}
      >
        <Twitter sx={{ fontSize: "", color: colors, size: size }} />
      </IconButton>
    </StyledA>
  </React.Fragment>
);

const Timer = () => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "June, 30, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <span>COMING IN:</span>
      <br />
      {days} DAYS, {hours} HOURS, {minutes} MINUTES, {seconds} SECONDS
    </React.Fragment>
  );
};

export const Prelaunch = () => {
  const variant = {
    blink: {
      opacity: [0.1, 1, 0.1],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
        repeatDelay: 0.1,
      },
    },
    rotate: {
      rotateY: [0, 180, 360, 180, 0],
      transition: {
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
        // repeatType: "loop",
        // repeatDelay: 0.1,
      },
    },
  };
  return (
    <Wrapper>
      <CssBaseline />
      <div
        style={{
          backgroundImage: `url('${logo}')`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "-35%",
          // backgroundPositionY: "100%",
          backgroundSize: "contain",
        }}
      >
        <Container>
          <Box
            sx={{
              marginBottom: "2.5rem",
            }}
          >
            <header>
              <Grid container>
                <Grid item xs={6}>
                  <motion.a
                    href="https://unibenmarketplace.com"
                    style={{
                      textDecoration: "none",
                      fontSize: "1rem",
                      color: "#fff",
                      cursor: "pointer",
                      // "&:hover": { opacity: 0.5 },
                    }}
                    variants={variant}
                    animate="blink"
                  >
                    <ListItem disablePadding disableGutters>
                      {/* <ListItemIcon>
                        <img
                          src={logoO}
                          alt="logo"
                          style={{
                            display: "inline-block",
                            // width: "",
                          }}
                        />
                      </ListItemIcon> */}
                      <ListItemText primary="unibenmarketplace.com" />
                    </ListItem>
                  </motion.a>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ float: "right" }}>
                    <Socials colors="#fff" />
                  </Box>
                </Grid>
              </Grid>
            </header>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box
                component={motion.div}
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 4 }}
                sx={{
                  width: { sm: "50%", xs: "100%" },
                  marginBottom: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  order: { xs: 2, sm: 1 },
                }}
              >
                <StyledImg sx={{ height: { xs: "60vh", sm: "80vh" } }} />
              </Box>

              <Box
                sx={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                  order: { xs: 1, sm: 2 },
                  height: { sm: "initial", xs: "70vh" },
                }}
              >
                <motion.div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    // display: "grid",
                    // alignItems: "center",
                    // justifyContent: "center",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      alignItems: "center",
                      justfiyContent: "center",
                      paddingTop: "2rem",
                    }}
                  >
                    <img
                      src={logoO}
                      alt="logo"
                      style={{ display: "inline-block", width: "23%" }}
                    />
                  </Box>
                  <Typography variant="h3" sx={{ color: "#fff" }}>
                    Welcome
                  </Typography>
                  <Typography variant="h3" sx={{ color: "#fff" }}>
                    to the Largest Hub
                  </Typography>
                  <Typography variant="h3" sx={{ color: "#fff" }}>
                    on Campus.
                  </Typography>
                  <TypeAnimation
                    style={{
                      fontSize: ".9rem",
                      marginTop: "2.5rem",
                      fontWight: "bold",
                      color: "#fff",
                      // fontStyle: 'italic'
                    }}
                    sequence={[
                      "Buy | Sell | Swap | Auction ",
                      2100,
                      "Buy",
                      1900,
                      "Sell",
                      1900,
                      "Swap",
                      1900,
                      "Auction.",
                      1900,

                      "",
                    ]}
                    repeat={Infinity}
                  />
                </motion.div>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>

      <Box
        sx={{
          backgroundColor: "#141414",
          width: "100%",
          padding: "2rem 0",
          marginTop: "1rem",
        }}
      >
        <Container>
          <motion.span
            variants={variant}
            // initial={{ opacity: 0.1 }}
            animate="blink"
          >
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                textAlign: { xs: "center", sm: "left" },
                fontSize: { md: "1.7rem", sm: "1.2rem", xs: "1.5rem" },
                width: { xs: "100%", sm: "30%", md: "40%" },
                letterSpacing: ".2rem",
              }}
            >
              <Timer />
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                textAlign: { sm: "left", xs: "center" },
              }}
            >
              ANTICIPATE!!!
            </Typography>
          </motion.span>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Info />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Waitlist
                  Socials={<Socials colors="#E91E63" size="1.1rem" />}
                />
              </div>
              <div>
                <motion.div variants={variant} animate="rotate">
                  <img
                    src={unibenLogo}
                    alt="logo"
                    style={{ display: "inline-block", width: "25%" }}
                  />
                </motion.div>
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  Greatest Gbo gbo!
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Footer>
        <Typography
          sx={{ fontSize: ".8rem", color: "#dedede", textAlign: "cennter" }}
        >
          For inquiries, suggestions, propositions, or you just feel like buying
          us Shawarma <LocalDining sx={{ fontSize: ".9rem" }} /> ?
        </Typography>
        {/* <Typography
          sx={{ fontSize: ".8rem", color: "#dedede", textAlign: "center" }}
        >
          Let's have a chat:
        </Typography> */}
        <Link
          sx={{ fontSize: ".8rem", color: `#E91E63`, textDecoration: "none" }}
          href="https://wa.me/+2348152038183?text=Hi!%Victor"
        >
          <WhatsApp
            sx={{ fontSize: "inherit", color: "inherit", marginTop: "-.5rem" }}
          />{" "}
          Chat with us here
        </Link>
        <br />
        <Typography sx={{ color: "#616161", fontSize: ".9rem" }}>
          Follow us on socials
        </Typography>

        <div style={{ margin: ".5rem 0" }}>
          <Socials colors="#fff" />
        </div>

        <Divider sx={{ borderColor: "#1e1e1e", margin: "1rem 0" }} />
        <Typography sx={{ color: "#616161", fontSize: ".9rem" }}>
          &copy;
          {" Uniben Marketplace "}
          {new Date().getFullYear()}
        </Typography>
      </Footer>
    </Wrapper>
  );
};
