import { styled, Tabs } from "@mui/material";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "4px",
  },
  "& .MuiTabs-indicatorSpan": {
    // maxWidth: 40,
    width: "100%",
    borderRadius: "2px",    
    backgroundColor: "#7d2278",
  },
  "& .MuiTabs-indicator::after": {
    content: '""',
    width: 0,
    height: "4px",
    borderRadius: "2px",    
    backgroundColor: "#7d2278",
    transition: "all 0.3s",
    webkitTransition: "all 0.3s",
  },
  "& .MuiTabs-indicator:hover::after": {
    width: "100%",
  }
}));


export default StyledTabs;
