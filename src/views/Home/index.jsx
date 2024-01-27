import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { Hero } from "./Hero";
import { ProductsCategory } from "./ProductsCategory";
import { HomePageProductGrid } from "./HomePageProductGrid";
import { RecentProductList } from "../../Components/Product";
import { Trending } from "./Trending";

import { useDocumentTitle, useScrollTop } from "../../hooks";
import { Request } from "./Request";
import { Feedback } from "./Feedback";

const Home = () => {
  useScrollTop();
  useDocumentTitle("Welcome To Uniben Marketplace");


  return (
    <div style={{ paddingBottom: "1rem" }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            {/* <Container> */}
            <Grid container spacing={2}>
              <Grid item xs={false} sm={3}>
                <Box sx={{ position: "sticky", top: "4.5rem" }}>
                  <ProductsCategory />
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Hero />
                <br />
                <Box sx={{ display: { sm: "none", xs: "block" } }}>
                  <ProductsCategory type="grid" />
                </Box>
                {/* <br /> */}
                <br />
                <RecentProductList />
              </Grid>
              <Grid item xs={false} sm={2}>
                <Box
                  sx={{
                    display: { xs: "", sm: "block" },
                    position: "sticky",
                    top: "4.5rem",
                  }}
                >
                  <Trending />
                  <br />
                  <Request />
                </Box>
              </Grid>
            </Grid>
            {/* </Container> */}
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Hero />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Hero />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            {/* <Container> */}
            <HomePageProductGrid />
            {/* </Container> */}
          </Grid>

          <Grid item xs={12}>
            {/* <Container> */}
            <Feedback />
            {/* </Container> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
