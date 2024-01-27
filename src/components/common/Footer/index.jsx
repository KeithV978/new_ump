import BubbleChartRounded from "@mui/icons-material/BubbleChartRounded";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
// import {
//     TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter,
// } from "react-icons/ti";

import {styled} from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Link} from "react-router-dom";
// import logo from "../../../Assets/Images/logo/logoWhite01.svg";

const StyledListItem = styled("li")(({theme}) => ({
    // width: '100%',
    fontSize: "inherit", // borderLeft: '1px solid #fff',
    // textAlign: "center",
    margin: "0 0.5em", ":nth-child(1)": {
        marginLeft: "0!important",
    }, ":nth-last-child(1)": {
        marginRight: "0!important",
    }, "& a": {
        textDecoration: "none", color: "inherit",
    }, "& a:hover": {
        color: [theme.palette.primary.light],
    },
}));

const StyledListIcon = styled("li")(({theme}) => ({
    // width: '100%',
    margin: "0 0.25em",
    fontSize: "inherit",
    width: "1.5em",
    height: "1.5em",
    aspectRatio: "1/1",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ":nth-child(1)": {
        marginLeft: "0!important", backgroundColor: "#00acee",
    },
    ":nth-child(2)": {
        backgroundColor: "#1877f2",
    },
    ":nth-child(3)": {
        background: "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
    },
    ":nth-last-child(1)": {
        marginRight: "0!important",
        backgroundColor: "#0072b1",
    },
    "& a": {
        textDecoration: "none", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center",
    },
    "& a:hover": {
        color: "#ccc",
    },
}));

const Footer = () => {
    return (<Box
        sx={{
            mt: {sm: 10, xs: 0},
            py: 7,
            px: 4,
            backgroundColor: "#282828",
            color: "#ccc",
            // borderTopWidth: "2px",
            // borderTopStyle: "solid",
            // borderTopColor: "primary.light",
        }}
    >
        <Container>
            <Box
                sx={{
                    textAlign: "center", margin: "auto",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: {xs: "center", sm: "space-between"},
                        // mb: 3,
                        flexWrap: "wrap",
                    }}
                >
                    {/* logo */}
                    {/* <Box sx={{ width: { xs: "10%", sm: "8%" }, margin: "auto 0" }}>
            <img src={logo} alt="logo" width="100%" />
          </Box> */}
                    <Typography
                        sx={{
                            fontWeight: "700",
                            color: "#fff",
                            // fontSize: {xs: "1rem", sm: "1.5rem", lg: "2rem"},
                            ml: {xs: 2, sm: 0},
                            mr: 2
                        }}>
                        <BubbleChartRounded
                            sx={{
                                // color: "primary.light,
                                fontSize: "inherit"
                            }}
                        />
                        {"Uniben Marketplace "}&#174;
                    </Typography>
                    <Box sx={{
                        // width: {xs: "80%", sm: "40%"},
                        listStyle: "none",
                        display: "flex",
                        margin: "auto 0",
                        justifyContent: "center",
                        // fontSize: {xs: "1rem", sm: "1.5rem"},
                        flexWrap: "wrap",
                    }}>
                        <StyledListIcon>
                            <Link to="https://twitter.com/unimarkets">
                                <Twitter color={"inherit"}/>
                            </Link>
                        </StyledListIcon>
                        <StyledListIcon>
                            <Link to="https://facebook.com/unimarkets">
                                <Facebook color={"inherit"}/>
                            </Link>{" "}
                        </StyledListIcon>
                        <StyledListIcon>
                            <Link to="https://instagram.com/unimarkets">
                                <Instagram color={"inherit"}/>
                            </Link>{" "}
                        </StyledListIcon>
                        <StyledListIcon>
                            <Link to="https://linkedin.com/unimarkets">
                                <LinkedIn color={"inherit"}/>
                            </Link>
                        </StyledListIcon>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {xs: "center", sm: "space-between"},
                    // mb: 5,
                    flexWrap: "wrap",
                }}>
                    <Box sx={{
                        listStyle: "none",
                        display: "flex",
                        // fontSize: {xs: "1rem", sm: "1.25rem", lg: "1.5rem"},
                        flexWrap: "wrap",
                    }}>
                        <StyledListItem>
                            <Link to="/contact">
                                Terms and Conditions
                            </Link>
                        </StyledListItem>
                    </Box>
                    <Box sx={{
                        listStyle: "none",
                        display: "flex",
                        // fontSize: {xs: "1rem", sm: "1.25rem", lg: "1.5rem"},
                        flexWrap: "wrap",
                        justifyContent: {xs: "center", sm: "start"},
                    }}>
                        <StyledListItem>
                            <Link to={"/"}>Home</Link>
                        </StyledListItem>
                        {/*<StyledListItem>*/}
                        {/*    <Link to="https://unibenmarketplace.com/search">Search</Link>*/}
                        {/*</StyledListItem>*/}
                        <StyledListItem>
                            <Link replace={true} to={"/help-desk"} state={{init: 0}}>About</Link>
                        </StyledListItem>
                        <StyledListItem>
                            <Link replace={true} to={"/help-desk"} state={{init: 2}}>
                                Send us a message
                            </Link>
                        </StyledListItem>
                    </Box>
                    {/* <Box>
            <Typography variant="body2" align="center">
              Images by <Link href="https://www.freepik.com/free-photo">Freepik</Link>
            </Typography>
          </Box> */}
                </Box>
                <Divider variant={"middle"} sx={{borderColor: "rgba(240, 240, 240, 0.12)"}}/>
                <Box sx={{margin: "auto 0"}}>
                    {/* --------Social Links----------- */}

                    {/* ----------------- */}
                    <Box>
                        <Typography
                            variant="body2"
                            align="center"
                            sx={{pt: 1, pb: 1, fontSize: ".8rem",}}
                        >
                            &copy; {new Date().getFullYear()} {/* <br /> */}
                            <Link
                                sx={{textDecoration: "none", color: "#fff"}}
                                href="https://unibenmarketplace.com"
                            >
                                unibenmarketplace.com
                            </Link>
                            {/* <br /> */}
                            {" | "}
                            {"All Rights Reserved."}
                        </Typography>
                        {/*<Typography*/}
                        {/*    variant="body2"*/}
                        {/*    align="center"*/}
                        {/*    sx={{pt: 1, pb: 1, fontSize: ".8rem"}}*/}
                        {/*>*/}
                        {/*    {'Version 1.0.0'}*/}
                        {/*</Typography>*/}
                    </Box>
                </Box>{" "}

            </Box>
        </Container>
    </Box>);

};
export default Footer;
