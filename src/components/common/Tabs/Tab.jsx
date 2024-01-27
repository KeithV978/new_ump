import { styled, Tab } from "@mui/material";

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    paddingBottom: 0.5,
    paddingX: 0,
    "&.Mui-selected": {
      color: "#fff",
      fontWeight: 600,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default StyledTab
