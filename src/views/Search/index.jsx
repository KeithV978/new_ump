import { Search as SearchIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Pagination from "@mui/material/Pagination";
import Divider from "@mui/material/Divider";
import React, { Fragment, useState, useEffect } from "react";
import { useDidMount, useDocumentTitle, useScrollTop } from "../../hooks/";
import { useDispatch, useSelector } from "react-redux";
import { setRequestStatus } from "../../Redux/actions/misc_actions";
import { searchProduct } from "../../Redux/actions/product_actions";
import { LoadingOutlined } from "@ant-design/icons";
// import SearchBar from "./component/SearchBar";

// import SVG
import NoProducts from "../../Assets/Images/Search/undraw_empty_cart_co35.svg";
import ProductGrid from "../../Components/Product/ProductGrid";
import { styled, useTheme, alpha } from "@mui/material";
import Button from "@mui/material/Button"; 

import productsData from "../../devData/productData";
import { useParams } from "react-router-dom";

const Wapper = styled("div")(({ theme }) => ({
  display: "flex",
  // overflow: "hidden",
  flexDirection: "row",
  justifyContent: "space-between",
  color: "#939393",
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },

  border: "1px solid #ccc",
  // fontSize: '1rem',
  borderRadius: "60px",
  alignItems: "center",
  backgroundColor: alpha(theme.palette.common.white, 1),
}));

const StyledInput = styled("input")(() => ({
  width: "100%",
  height: "100%",
  color: "inherit",
  border: "none",
  outline: "none",
  // padding: ".5rem",
  fontSize: "inherit",
  paddingLeft: ".5rem",
  marginLeft: ".5rem",
}));
const StyledSelect = styled("select")(({ theme }) => ({
  fontSize: "inherit",
  // color: "inherit",
  outline: "none",
  margin: "auto",
  border: "none",
  color: [theme.palette.tertiary.main]
})); 
const SearchBar = ({ setSearchString, handleSubmit }) => {
  return (
    <Box
      component="form"
      noValidate
      sx={{ margin: "auto", mt: { sm: 2, xs: 3 }, height: '100%'}}
    >
      <Wapper>
        <StyledInput onChange={event => setSearchString(prev => ({...prev, searchKeyWord: event.target.value}))} placeholder="Search..." type="text" defaultValue={""} />
        <Button
          type="Submit"
          variant="contained"
          color="tertiary"
          onClick={handleSubmit}
          sx={{ 
            color: "#fff",
            margin: ".5rem",
            padding: { sm: ".3rem 1.5rem", xs: ".1rem 1.2rem"},
            borderRadius: "60px",
          }}
        >
          <SearchIcon sx={{fontSize: '.9rem'}}/>
          Search
        </Button>
      </Wapper>
      <Box sx={{ margin: "auto", width: "fit-content", padding:"1rem 0" }}>
        <StyledSelect
          placeholder="Category"
          onChange={(event) => setSearchString(prev => ({...prev, category: event.target.value}))}
        >
          <option key="" style={{fontWeight: 'bold'}}>Select Category</option>;
          {[
            "phones/tabs",
            "foods",
            "gadgets",
            "fashion",
            "fashion accessories",
            "real estate",
            "furnitures",
            "books",
            "home appliances",
            "computers",
            "vehicles",
            "services",
          ].map((category) => {
            return <option key={category}>{category}</option>;
          })}
        </StyledSelect>
      </Box>
    </Box>
  );
};
const Search = () => {
  const { searchkeyword, category } = useParams();

  const [searchString, setSearchString] = useState(
    {
      searchKeyword: searchkeyword || "",
      category: category ||  "",

  });

  const theme = useTheme();

  useScrollTop();
  useDocumentTitle(`Search - ${searchString.searchKeyword} | Uniben Marketplace`);

  const dispatch = useDispatch();
  const didMount = useDidMount(true);

  const store = useSelector((state) => ({
    isLoading: state.app.loading || false,
    products: state.products.searchedProducts || [],
    requestStatus: state.app.requestStatus || false,
  }));

  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    event.preventDefault();
    setPage(value);
  };

  useEffect(() => {
    if (didMount && !store.isLoading) {
      dispatch(searchProduct(searchString));
    }
  }, [searchString, category, searchkeyword, dispatch, didMount, store.isLoading]);

  useEffect(() => {
    dispatch(setRequestStatus(""));
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(searchProduct(searchString));
    setSearchString("");
  };

  if (store.requestStatus && !store.isLoading) {
    return (
      <Fragment>
        <Box sx={{ padding: "4rem 0" }}>
          <Container>
            <Box sx={{ width: { xs: "100%", sm: "60%" }, margin: "auto" }}>
            <SearchBar setSearchString={setSearchString} handleSubmit={handleSearch} />
            </Box>
            <br />
            <div style={{ margin: "auto" }}>
              <Divider />
              <br/>
              <Typography variant="body1">
                <i>{"Your Keyword returned no results. Try another keyword."}</i>
              </Typography>
              <br />
              <Box
                sx={{
                  width: { xs: "30%", sm: "20%" },
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                ></div>
                <img
                  width="100%"
                  src={NoProducts}
                  alt="no products displayed"
                />
              </Box>
            </div>
          </Container>
        </Box>
      </Fragment>
    );
  }

  // if (!store.requestStatus && !store.isLoading) {
    if (true) {
    return (
      <Fragment>
        <Box sx={{ padding: {sm:"2rem 0", xs:"4rem 0"} }}>
          {!store.requestStatus && (
            <>
              <Box>
                <Container>
                  <SearchBar setSearchString={setSearchString} handleSubmit={handleSearch} />
                </Container>
              </Box>
              <Container>
                <Box sx={{ display: "flex" }}>
                  <i>
                    <span>
                      <SearchIcon
                        sx={{ fontSize: ".9rem", color: "tertiary.main" }}
                      />
                    </span>
                   <strong> Search results for: {searchString.searchKeyword? 
                    <Typography variant="p" sx={{ color: "#282828" }}>
                      <strong> {searchString.searchKeyword}</strong>
                    </Typography>:
                    '" "'}</strong>
                  </i>
                </Box>
                <Divider />
                {productsData ? (
                  <>
                    {productsData && (
                      <ProductGrid products={productsData} gap={2} />
                    )}
                  </>
                ) : (
                  <LoadingOutlined />
                )}
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection:'',
                    justifyContent: "space-between",
                    pt: 4,
                  }}
                >
                  <Typography variant="p">
                    Page{" "}
                    <span>
                      <strong>{page}</strong>{" "}
                    </span>
                  </Typography>
                  <Pagination
                    page={page}
                    size="small"
                    // count={(store.products.length % 12) === 1? (store.products.length / 12): Math.floor((store.products.length / 12)+1)}
                    count={12}
                    color="tertiary"
                    variant="text"
                    // shape='rounded'
                    // showFirstButton
                    showLastButton
                    onChange={handlePageChange}
                  />
                </Box>
              </Container>
            </>
          )}
        </Box>
      </Fragment>
    );
  }

  return (
    <Box sx={{ padding: "3.2rem 0" }}>
      <Container>
      <SearchBar setSearchString={setSearchString} handleSubmit={handleSearch} />
        {/* <br /> */}
        <Divider sx={{margin: "1rem 0"}}/>
        <Typography variant="h6">
          <LoadingOutlined style={{color: `${[theme.palette.tertiary.main]}`}} />{" "}
          Searching...
        </Typography>
      </Container>
    </Box>
  );
};
export default Search;
