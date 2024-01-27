import * as React from "react";
import Grid from "@mui/material/Grid";

import { Hero } from "./hero";
import {MostSearchedTermsComponent} from './mostSearchedTermsComponent'
import { AddProductPanel } from "../../../components/products/AddProduct/AddProductPanel";
import { ProductsFeed } from "../../../components/products/ProductsFeed";


export const MidSection = () => {


  return(
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid item xs={12}>
          <MostSearchedTermsComponent/>
          <AddProductPanel />
        </Grid>
        <Grid item xs={12}>
          <ProductsFeed />
        </Grid>
      </Grid>
    </React.Fragment>
  );
  
}