import React from "react";
// import { useSwapProducts } from "../../../hooks";
// import { useDispatch } from "react-redux";
// import { setAlert, setLoading } from "../../../Redux/actions/misc_actions";
import { ProductShowcaseGrid } from "../";
// import Paper  from "@mui/material/Paper";
import Box from "@mui/material/Box";


import productsData from ".././../../devData/productData";
import { SwapVertRounded } from "@mui/icons-material";

const SwapProductsList = () => {
  // const { swapProducts, isLoading, error } =
  // useSwapProducts(10);
 
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   error !== "" && dispatch(setAlert(error));
 
  //   window.scrollTo(0, 0);
  //   return () => dispatch(setLoading(false));
  // }, [dispatch, error]);

// console.log(swapProducts)

  return (
    <Box overflow="hidden" borderRadius="5px">
      {productsData && (
        <ProductShowcaseGrid
          title="Swap Deals!"
          white={true}
          // products={recentlyAddedProducts}
          products={productsData}
          skeletonCount={4}
          gap={2}
          // isLoading={isLoading}
          multiRoll={false}
          logo={<SwapVertRounded fontSize="inherit"/>}
        />
      )}
    </Box>
  );
};
export default SwapProductsList;
