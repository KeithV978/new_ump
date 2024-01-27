import Grid from "@mui/material/Grid"; 
import PropType from "prop-types";
import React from "react";
import ProductsCard from "./ProductsCard";

const ProductGrid = ({ products, gap }) => {
  return (
    <div>
      <Grid container spacing={gap ? gap : 4} 
      sx={{
        //  flexWrap: "wrap", 
         mt: 3 
         }}>
        {products && (products?.length === 0
          ? new Array(4).fill({}).map((product, index) => (
              <Grid
                key={index}
                item
                xs={6}
                sm={4}
                md={2}
                sx={{ flex: "1 1 auto" }}
              >
                <ProductsCard product={product} />
              </Grid>
            ))
          : products.map((product) => (
              <Grid
                key={product.id}
                item
                xs={6}
                sm={4}
                md={2}
                sx={{ flex: "1 1 auto" }}
              >
                <ProductsCard product={product} />
              </Grid>
            )))}
      </Grid>
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropType.array.isRequired,
};

export default ProductGrid;
