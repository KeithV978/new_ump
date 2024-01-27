import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {
    Tab,
    Tabs,
    TabPanel,
    TabPanelAlly,
} from "../../Components/Common/Tabs";
import {About} from "./about";
import FAQs from "./faqs";
import bg1 from "../../Assets/Images/helpdesk/tabBanner.jpg";
import bg2 from "../../Assets/Images/helpdesk/tabBanner2.jpg";
import bg3 from "../../Assets/Images/helpdesk/tabBanner3.jpg";
import Contact from "./contact";
import {useLocation} from "react-router-dom";


const Help = () => {
    const location = useLocation();
    const {init} = location.state ? location.state : false;

    const [value, setValue] = React.useState(init ? init : 0);


    if (value === 0) {
        var bg = bg1;
    } else if (value === 1) {
        bg = bg2;
    } else if (value === 2) {
        bg = bg3;
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{mt: {sx: "0rem", sm: "-1rem"}}}>
            <Box
                sx={{
                    borderBottom: 2,
                    borderColor: "divider",
                    backgroundColor: "transparent",
                    height: {xs: "6rem", sm: "10rem", md: "20rem", lg: "25rem"},
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                    paddingY: {xs: 1, sm: 2, lg: 4},
                    display: "flex",
                    alignItems: "flex-end",
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "stretch",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: {xs: "0", sm: "2rem", md: "4rem", lg: "5rem"},
                            fontWeight: 900,
                            color: "#fff",
                        }}
                    >
                        {value === 0
                            ? "About"
                            : value === 1
                                ? "Frequently Asked Questions"
                                : "Support"}
                    </Typography>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Helpdesk Tabs"
                    >
                        <Tab label="About" {...TabPanelAlly(0)} />
                        <Tab label="FAQs" {...TabPanelAlly(1)} />
                        <Tab label="Support" {...TabPanelAlly(2)} />
                    </Tabs>
                </Container>
            </Box>
            <Container>
                <TabPanel value={value} index={0}>
                    <About/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <FAQs setValue={setValue} value={setValue}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Contact/>
                </TabPanel>
            </Container>
        </Box>
    );


};

export default Help;
