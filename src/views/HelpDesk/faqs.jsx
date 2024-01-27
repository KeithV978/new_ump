import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Add, Remove } from "@mui/icons-material";

import { useDocumentTitle, useScrollTop } from "../../hooks";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../../Components/Common/Accordion";

const FAQs = ({ setValue, value }) => {
  useScrollTop();
  useDocumentTitle("Frequently Asked Questions | Uniben Marketplace");

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: "3em",
                fontWeight: 900,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Got a question?
            </Typography>
            <Typography
              variant="h1"
              mt={1}
              sx={{
                fontSize: "2em",
                fontWeight: 900,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Your questions answered.
            </Typography>
            <Typography mt={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
              We've put together some commonly asked questions to give you more
              information about The MarketPlace and some of our services.
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Typography
              variant="h1"
              fontWeight={900}
              sx={{ fontSize: "1.5em" }}
            >
              Still need help?
            </Typography>
            <Typography sx={{ fontSize: "1.2em" }}>
              If you can't find what you need, contact{" "}
              <Link
                underline="none"
                onClick={() => setValue(2)}
                sx={{ textTransform: "none", fontSize: "inherit", pl: 0, mouse: "pointer" }}
              >
                support
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card variant="outlined">
            <CardContent sx={{ paddingY: "2rem", paddingX: 0 }}>
              <Typography
                variant="h1"
                fontWeight={900}
                sx={{
                  fontSize: "1.5em",
                  paddingX: "2rem",
                  paddingBottom: "2rem",
                }}
              >
                Uniben MarketPlace
              </Typography>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={expanded === "panel1" ? <Remove /> : <Add />}
                >
                  <Typography>Creating an account</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    libero ipsa aperiam nesciunt atque, unde dolor. Assumenda
                    autem sequi inventore saepe ut, aliquam ab! Quasi atque,
                    illo ducimus optio maxime, nesciunt, aliquid eveniet numquam
                    doloremque sunt id? Earum, obcaecati! Quisquam molestiae
                    eaque temporibus placeat aliquam officia autem ipsa
                    excepturi nobis!
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={expanded === "panel2" ? <Remove /> : <Add />}
                >
                  <Typography>Resetting your password</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat alias iste omnis, suscipit vitae nostrum magni dolor
                  vero? Commodi, laudantium?
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={expanded === "panel3" ? <Remove /> : <Add />}
                >
                  <Typography>Auctioning a product</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio a et aperiam consectetur cupiditate dolores unde,
                  reprehenderit pariatur mollitia maiores expedita repellendus
                  numquam dolore qui ullam debitis vel perspiciatis? Quaerat
                  iste praesentium at culpa enim eveniet illum fuga ullam sed
                  voluptate, ratione harum tempora doloribus. Cumque officiis
                  reiciendis quisquam culpa architecto, tempora est, earum qui
                  quaerat obcaecati tenetur pariatur amet laudantium quas
                  dolorum eaque nulla impedit blanditiis enim! Repudiandae,
                  alias suscipit. Nam totam fuga quo animi quod corrupti non,
                  magni reprehenderit laborum quisquam, aliquid architecto
                  eveniet, tempore optio reiciendis voluptatem repellat ullam
                  natus alias laudantium id distinctio maiores. Porro, saepe.
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={expanded === "panel4" ? <Remove /> : <Add />}
                >
                  <Typography>Lorem ipsum dolor sit amet.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, sequi! Tenetur error qui, consequuntur tempore
                  sapiente omnis natus quos culpa harum quam deleniti amet ad
                  modi dolorum temporibus hic a sunt id, delectus suscipit ullam
                  eligendi? Doloremque quos porro voluptatem maiores, corrupti
                  reiciendis ea! Molestiae doloremque, ratione eos blanditiis
                  labore laudantium cum deleniti animi, quae totam, ut nobis
                  voluptas voluptatem.
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={expanded === "panel5" ? <Remove /> : <Add />}
                >
                  <Typography>Bidding in an auction</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis ipsum ipsa sunt voluptates veritatis, temporibus
                  voluptatem repellendus perspiciatis laudantium eos.
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardActions sx={{ padding: "2rem" }}>
              <Button variant="contained">See all articles</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} mt={5}>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Typography
              variant="h1"
              fontWeight={900}
              sx={{ textAlign: "center", fontSize: "1.5em" }}
            >
              Still need help?
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize: "1.2em" }}>
              If you can't find what you need, contact{" "}
              <Link
                underline="none"
                onClick={() => setValue(2)}
                sx={{ textTransform: "none", fontSize: "inherit", pl: 0, mouse: "pointer" }}
              >
                support
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default FAQs;
