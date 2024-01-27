import { Email, Phone, WhatsApp } from "@mui/icons-material";
import { useDocumentTitle, useScrollTop } from "../../hooks";

import { Box, Grid, Link, Typography, styled } from "@mui/material";

const MyLink = styled((props) => <Link underline="none" {...props} />)(
  ({ theme }) => ({
    color: "#000",
    "&.MuiLink-root:hover": {
      color: "#7d2278",
      fontWeight: 600,
    },
  })
);

const Contact = () => {
  useScrollTop();
  useDocumentTitle("Support | Uniben Marketplace");

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "3em",
              fontWeight: 900,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            We're here
          </Typography>
          <Typography mt={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
            Our door is always open for a chat, let's talk.
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "3em",
              fontWeight: 900,
              mt: { xs: 5, md: 0 },
              textAlign: { xs: "center", md: "left" },
            }}
            color={"primary"}
          >
            Meet us
          </Typography>
          <Typography
            mt={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <Phone color="primary" fontSize="inherit" sx={{ mr: 1 }} />
            <MyLink href="tel:+2348152038183">+2348152038183</MyLink>
          </Typography>
          <Typography
            mt={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <WhatsApp color="primary" fontSize="inherit" sx={{ mr: 1 }} />
            <MyLink
              target="_blank"
              rel="noopener"
              href="https://wa.me/+2348152038183?text=Hello%2C%20My%20name%20is%20...%0AI%20would%20like%20to%20make%20enquiries%20about"
            >
              +2348152038183
            </MyLink>
          </Typography>
          <Typography
            mt={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <Email color="primary" fontSize="inherit" sx={{ mr: 1 }} />
            <MyLink href="mailto:user@me.example">user@me.example</MyLink>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
