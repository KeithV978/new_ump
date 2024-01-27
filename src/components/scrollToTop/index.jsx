import { ArrowUpOutlined } from "@ant-design/icons";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import * as React from "react";

const ScrollToTop = (props) => {
  const { window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    // console.log(event.target.ownerDocument);
    const anchor = event.target.ownerDocument.querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };
  const theme = useTheme();
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <ArrowUpOutlined color={`${[theme.palette.secondary.main]}`} />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;
