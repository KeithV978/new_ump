// import { Grid, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material";
import { useDocumentTitle, useScrollTop } from "../../hooks";

import logo from "../../Assets/Images/logo/logo01.svg";

export const About = () => {
  useScrollTop();
  useDocumentTitle("About Us | Uniben Marketplace");

  const Image = styled("img")(({ theme }) => ({
    display: "inline-block",
    margin: "center",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div>
          <Typography
            sx={{
              color: "primary.light",
              margin: "auto",
              padding: "-1px 0",
              borderBottom: ".2rem solid #ccc",
              // textAlign: "center",
              width: "fit-content",
              fontSize: "1.3rem",
              letterSpacing: ".2rem",
            }}
          >
            {"ABOUT US"}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Image src={logo} alt="logo" />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
          veniam distinctio facere amet magnam repellendus blanditiis in,
          similique molestiae voluptatibus vitae? Ducimus reiciendis odio sunt
          dolor veritatis impedit? Qui sequi, pariatur fugiat error cupiditate
          quod quidem quas repellat ea sunt impedit nostrum assumenda et culpa
          velit iusto ab modi aut vero laborum? Fugit nesciunt saepe inventore
          doloribus explicabo nobis, officiis delectus quae assumenda vero nihil
          aut fugiat ab minus libero dolorem odit iusto, minima quos provident
          quo. Dolores sunt autem nisi sint! Nisi, quibusdam accusamus sunt
          numquam minima, facere nihil odit iusto at, esse nobis ipsam quod id!
          Dolorem, libero?
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          alias repellendus architecto rem quo quod voluptatibus quisquam, eos
          voluptates officiis porro placeat, modi fuga! Consequatur porro
          quisquam quibusdam voluptatem accusantium ipsum dolores sequi quae
          illo saepe rerum unde, corporis fuga ducimus iusto repudiandae magni!
          Consequuntur exercitationem explicabo eum illo blanditiis.
        </Typography>
      </Grid>
      <Grid item xs={12} mt={5}>
        <div>
          <Typography
            sx={{
              color: "primary.light",
              margin: "auto",
              padding: "-1px 0",
              borderBottom: ".2rem solid #ccc",
              // textAlign: "center",
              width: "fit-content",
              fontSize: "1.3rem",
              letterSpacing: ".2rem",
            }}
          >
            {"MEET THE TEAM"}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
          excepturi quam veritatis adipisci atque temporibus. Minus adipisci,
          fugiat dolorum labore, blanditiis ut ipsam, cupiditate sint magnam
          mollitia libero sed laborum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iure, doloribus quibusdam fugit atque corporis
          accusantium minus facilis harum adipisci temporibus eum eligendi
          distinctio architecto debitis sed libero nemo voluptatum vel non!
          Dolor asperiores deleniti cupiditate id nulla. Ex facere dolore beatae
          minus, magni cum repellat libero sint, minima optio nihil at
          repellendus placeat ullam culpa aspernatur vero perferendis similique?
          Esse fuga minus facilis accusamus officiis nemo sint deleniti maxime
          beatae voluptatibus. Quasi dignissimos nam maxime, quos sint natus
          ratione odio id aperiam officia velit voluptatibus quo repudiandae
          omnis ipsum reprehenderit neque laboriosam quam eaque assumenda
          voluptate. Rem veniam est quidem?
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}></Grid>
    </Grid>
  );
};
