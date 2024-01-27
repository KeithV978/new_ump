// import React from "react";
// import { useSalesProducts } from "../../../hooks";
// import { useDispatch } from "react-redux";
// import { setAlert, setLoading } from "../../../Redux/actions/misc_actions";
import { ProductShowcaseGrid } from "../";

import productsData from "../../../devData/productData";
import SellRounded from "@mui/icons-material/SellRounded";
// import Paper  from "@mui/material/Paper";
import Box from "@mui/material/Box";

const SalesProductList = () => {
  // const { salesProducts, isLoading, error } =
  // useSalesProducts(10);

//   const dispatch = useDispatch();

//   React.useEffect(() => {
//     error !== "" && dispatch(setAlert(error));

    
//     window.scrollTo(0, 0);
//     return () => dispatch(setLoading(false));
//   }, [dispatch, error]);

// console.log(salesProducts)

  return (
    <Box  overflow="hidden" borderRadius="5px">
      {productsData && (
        <ProductShowcaseGrid
          title="Sales Deals!"
          // products={recentlyAddedProducts}
          products={productsData}
          skeletonCount={4}
          gap={2}
          // isLoading={isLoading}
          multiRoll={false}
          logo={<SellRounded fontSize="inherit"/>}
        />
      )}
    </Box>
  );
};
export default SalesProductList;
