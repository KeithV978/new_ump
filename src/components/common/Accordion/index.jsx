import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material";
// import { Add } from "@mui/icons-material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  padding: "1rem",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  borderLeft: 0,
  borderRight: 0,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  "& .MuiAccordionSummary-content.Mui-expanded": {
    "& .MuiTypography-root": {
      fontWeight: 600,
    },
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.primary.main,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
  // backgroundColor: '#7d227821'
}));

export {Accordion, AccordionDetails, AccordionSummary}