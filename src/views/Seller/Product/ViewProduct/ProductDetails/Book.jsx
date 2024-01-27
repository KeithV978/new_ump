import * as React from "react";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { displayMoney } from "../../../../../helpers/utils";
import { ActionsPanel, Label, Output, Quote } from "./components";
import Tags from "./components/Tags";
import { Paper } from "@mui/material";

const Book = ({ product }) => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div
            style={{
              // backgroundColor: "#fff",
              padding: ".4rem",
              // border: ".1rem solid #ffedb9",
              marginBottom: ".4rem",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={6} sm={5}>
                {/* <Paper elevation={6} sx={{ margin: "1rem" }}> */}
                <Box sx={{backgroundColor: '#fff'}}>
                {product.headline && (
                  <Output>
                    <Label>Headline:</Label>
                    <Typography fontWeight="bold" variant="p">
                      {product.headline}
                    </Typography>
                  </Output>
                )}
                {product.course_title && (
                  <Output>
                    <Label>Course Title:</Label>
                    <Typography fontWeight="bold">
                      {product.course_title}
                    </Typography>
                  </Output>
                )}
                {product.author && (
                  <Output>
                    <Label>Author:</Label>
                    <Typography fontWeight="bold">{product.author}</Typography>
                  </Output>
                )}
                {product.course_code && (
                  <Output>
                    <Label>Course Code:</Label>
                    <Typography fontWeight="bold">
                      {product.course_code}
                    </Typography>
                  </Output>
                )}
                {product.sellers_name && (
                  <Output>
                    <Label>
                      {product?.transaction_mode === "sell"
                        ? "Seller's Name:"
                        : "Swapper's Name"}
                    </Label>
                    <Typography fontWeight="bold">
                      {product.sellers_name}
                    </Typography>
                  </Output>
                )}
                {product.newness && (
                  <Output>
                    <Label>Newness:</Label>
                    <Typography fontWeight="bold">{product.newness}</Typography>
                  </Output>
                )}
                {"rating" && (
                  <Output>
                    <Label>Seller's Rating:</Label>
                    <Rating
                      name="seller rating"
                      value={3}
                      size="small"
                      readOnly
                    />
                  </Output>
                )}
                {product.year_written && (
                  <Output>
                    <Label>Year Written/Published:</Label>
                    <Typography fontWeight="bold" variant="p">
                      {product.year_written}
                    </Typography>
                  </Output>
                )}
                {product.dateAdded && (
                  <Output>
                    <Label>Date Added:</Label>
                    <Typography fontWeight="bold">
                      {new Date(product.dateAdded).toLocaleDateString()}
                    </Typography>
                  </Output>
                )}
                </Box>
                {/* </Paper> */}
              </Grid>

              <Grid item xs={6} sm={5}>
                <Paper elevation={6} sx={{ padding: ".5rem" }}>
                  {product.price && (
                    <Output>
                      <Label>Price Tag:</Label>
                      <Typography fontWeight="bold" variant="h5">
                        <span style={{color: '#282828'}}>N</span><Quote>{displayMoney(product.price)}</Quote>
                      </Typography>
                    </Output>
                  )}
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: ".4rem",
              // border: ".1rem solid #ffedb9",
            }}
          >
            {product.tags && (
              <Output>
                <Label>Tags:</Label>
                <span>
                  <Tags items={product.tags} />
                </span>
              </Output>
            )}
          </div>
        </Grid>
        {/* {product.phone && ( */}
        <Grid item xs={12}>
          <Box 
          sx={{ 
            backgroundColor: '#fff', 
            padding: '.2rem 0',
            display: { sm: "block", xs: "none" } 
            }}>
            <ActionsPanel
              mode={product.transaction_mode}
              headline={product.headline}
              seller={product.displayName}
              phone={product.phone}
            />
          </Box>
        </Grid>
        {/* )} */}
      </Grid>
    </React.Fragment>
  );
};

export default Book;
