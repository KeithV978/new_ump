import {
  Box,
  Container,
  Divider,
  Grid,
  Pagination,
  Skeleton,
  Typography,
} from "@mui/material";
import ProfileProductCard from "../ProfileProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getSellersProducts } from "../../../../../Redux/actions/product_actions";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDidMount } from "../../../../../hooks";
import { setRequestStatus } from "../../../../../Redux/actions/misc_actions";
import NoDataImage from "../../../../../Assets/Images/account/undraw_no_data_re_kwbl.svg";
import productsData from "../../../../../devData/productData";

const Products = () => {
  const dispatch = useDispatch();
  const didMount = useDidMount(true);

  const store = useSelector((state) => ({
    isLoading: state.app.loading || false,
    products: state.products.sellersProducts || [],
    requestStatus: state.app.requestStatus || false,
    profileId: state.profile.id,
    ...state,
  }));

  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (didMount && !store.isLoading) {
      dispatch(getSellersProducts("653456789", 0));
      // dispatch(getSellersProducts(store.profileId))
    }
    console.log("Called: UI")
  }, [dispatch, didMount,store.isLoading]);

  useEffect(() => {
    dispatch(setRequestStatus(""));
  }, [dispatch]);

  if (!store.requestStatus && !store.isLoading) {
    return (
      <Box>
        <Container sx={{ ml: 2, mr: 2 }}>
          <Typography sx={{float: 'right', p:1}}>Filter By ~</Typography>
          {/* {console.log(store.products.items)} */}

          <Grid container spacing={2}>
            {productsData.length === 0 ? (
              <Grid item xs={12}>
                <Skeleton width="100%" height={100} />
                <LoadingOutlined /> {' Loading... Please wait!'}
              </Grid>
            ) : (
              productsData?.map((product) => (
                <Grid item xs={12}>
                  <ProfileProductCard products={product} />
                </Grid>
              ))
            )}
          </Grid>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: 4,
            }}
          >
            <Typography variant="p">
              Page{" "}
              <span>
                {" "}
                <strong>{page}</strong>{" "}
              </span>
            </Typography>
            <Pagination
              page={page}
              // count={(store.products.length % 12) === 1? (store.products.length / 12): Math.floor((store.products.length / 12)+1)}
              count={12}
              color="tertiary"
              variant="outlined"
              // shape='rounded'
              showFirstButton
              showLastButton
              onChange={handlePageChange}
            />
          </Box>
        </Container>
      </Box>
    );
  }
  if (store.requestStatus && !store.isLoading) {
    return (
      <Box>
        <Container>
          <LoadingOutlined />
          <Typography>Loading your products...</Typography>
        </Container>
      </Box>
    );
  }
  return (
    <div>
      <Container>
        {/* <SearchBar/> */}
        <Divider />
        <Typography variant="h6">
          <div style={{ width: "20rem" }}>
            <img src={NoDataImage} alt="No data" width={100} />
            <Typography>No Request in the general Pool</Typography>
          </div>
        </Typography>
      </Container>
    </div>
  );
};
export default Products;
