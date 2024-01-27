import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material";

const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
}));

const StyledLI = styled("li")(() => ({
  margin: "1rem 0",
  color: "#fff",
}));

export const Info = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box sx={{ margin: {sm: "2rem 0", xs: "4rem 0"} }}>
      <Typography sx={{ color: "#fff" }} variant="h5">
        Frequently Asked Questions
      </Typography>

      <div>
        <ul>
          <StyledLI>
            <StyledAccordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                sx={{ color: "#fff" }}
              >
                <Typography sx={{ color: "#fff" }}>
                  What's the mission behind <strong>Uniben Marketplace</strong>?                  
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#fff" }}>
                  ~ We are the bridge between every student who wants to buy,
                  and every students who wants to sell on campus.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </StyledLI>
          <StyledLI>
            <StyledAccordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel2d-header"
                sx={{ color: "#fff" }}
              >
                <Typography sx={{ color: "#fff" }}>
                  How much will it cost to sell on{" "}
                  <strong>Uniben Marketplace</strong>?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#fff" }}>
                 ~ Our services are completely free of charge for the first month. 
                 Then afterwards a monthly token applies. And yes, it is ridiculously cheap.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </StyledLI>

          <StyledLI>
            <StyledAccordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
                sx={{ color: "#fff" }}
              >
                <Typography sx={{ color: "#fff" }}>
                  Who is <strong>Uniben Marketplace</strong> meant for?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#fff" }}>
                  ~ This product is meant to serve the great students of uniben.
                  We encourage you to bring your businesses onboard. Whatever you want to
                  buy or sell we have the category for it.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </StyledLI>

          <StyledLI>
            <StyledAccordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
                sx={{ color: "#fff" }}
              >
                <Typography sx={{ color: "#fff" }}>
                  Can I be a one-time seller on <strong>Uniben Marketplace</strong>?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#fff" }}>
                  ~ Of course. If you need quick cash and want to sell an item
                  you no longer need,
                  {' '}<strong>Uniben Marketplace</strong> is the place. Someone
                  somewhere on campus needs that same item.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </StyledLI>

          <StyledLI>
            <StyledAccordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
                sx={{ color: "#fff" }}
              >
                <Typography sx={{ color: "#fff" }}>
                  What are the categories of products that can be sold on{" "}
                  <strong>Uniben Marketplace</strong>?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                ~{" "}
                <ul>
                  <StyledLI>Books</StyledLI> 
                  <StyledLI> Fashion items & accessories (Clothes, Bags, Shoes, Jewelries, etc)</StyledLI>
                  <StyledLI>Computers & computer accessories</StyledLI>
                  <StyledLI>Mobile devices & mobile devices accessories</StyledLI>
                  <StyledLI>Foods  & Pastries (raw or cooked)</StyledLI>
                  <StyledLI>Furnitures & household appliances</StyledLI>
                  <StyledLI>
                    Properties (including hostel spaces, apartments, etc)
                  </StyledLI>
                  <StyledLI>
                    Services (Gas sales, electricals, hair dressing, fashion designing,
                    painters, etc)
                  </StyledLI>
                  <StyledLI>Vehicles</StyledLI>
                  <StyledLI>Others</StyledLI>
                </ul>
              </AccordionDetails>
            </StyledAccordion>
          </StyledLI>

          <StyledLI>
            <StyledAccordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                aria-controls="panel6d-content"
                id="panel6d-header"
                sx={{ color: "#fff" }}
              >
                <Typography sx={{ color: "#fff" }}>
                  Who can sell on <strong>Uniben Marketplace</strong>?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#fff" }}>
                  ~ It is any and every student who has something to sell,
                  or anyone who has anything to sell to the students of uniben.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </StyledLI>

          <StyledLI>
            <StyledAccordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                aria-controls="panel7d-content"
                id="panel7d-header"
                sx={{ color: "#fff" }}
              >
                <Typography sx={{ color: "#fff" }}>
                 How do I sell, swap or auction on <strong>Uniben Marketplace</strong>?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#fff" }}>
                  ~ It's in few steps
                  <ul>
                    <li>Signup.</li>
                    <li>Upload the item(s) with the details for prospective buyers to see.</li>
                    <li>Buyers will contact you when they like what you offer.</li>
                    <li>Meetup or deliver the item.</li>
                  </ul>
                  {/* {' '}<strong>Uniben Marketplace</strong>  */}
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </StyledLI>
        </ul>
      </div>
    </Box>
  );
};
