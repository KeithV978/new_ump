import { useDidMount } from "../../../hooks";
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { applyFilter, resetFilter } from '../../../Redux/actions/filter_actions'
import { selectMax, selectMin } from '../../../selectors/selector'
import PriceRange from '../PriceRange'
import { Box, Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";


const Filters = ({ closeModal }) => {
    const { filter, isLoading, products } = useSelector((state) => ({
      filter: state.filter,
      isLoading: state.app.loading,
      products: state.products.items
    }));
    const [field, setFilter] = useState({
        brand: filter.brand,
        minPrice: filter.minPrice,
        maxPrice: filter.maxPrice,
        sortBy: filter.sortBy
      });
      const dispatch = useDispatch();
  const navigate = useNavigate();
  const didMount = useDidMount();

  const max = selectMax(products);
  const min = selectMin(products);

  useEffect(() => {
    if (didMount && window.screen.width <= 480) {
      navigate('/');
    }

    if (didMount && closeModal) closeModal();

    setFilter(filter);
    window.scrollTo(0, 0);
  }, [filter,didMount, closeModal,navigate]);


  const onPriceChange = (minVal, maxVal) => {
    setFilter({ ...field, minPrice: minVal, maxPrice: maxVal });
  };

  const onBrandFilterChange = (e) => {
    const val = e.target.value;

    setFilter({ ...field, brand: val });
  };

  const onSortFilterChange = (e) => {
    setFilter({ ...field, sortBy: e.target.value });
  };

  const onApplyFilter = () => {
    const isChanged = Object.keys(field).some((key) => field[key] !== filter[key]);

    if (field.minPrice > field.maxPrice) {
      return;
    }

    if (isChanged) {
      dispatch(applyFilter(field));
    } else {
      closeModal();
    }
  };

  const onResetFilter = () => {
    const filterFields = ['brand', 'minPrice', 'maxPrice', 'sortBy'];

    if (filterFields.some((key) => !!filter[key])) {
      dispatch(resetFilter());
    } else {
      closeModal();
    }
  };
  return(
    <Box>
        {/* Brand */}
        <FormControl variant='standard' sx={{width: '100%'}}>
            <InputLabel id="brand" sx={{ml:1}}>
               {' Brand '}
             </InputLabel>
             <Select
             variant='standard'
             labelId="brand"
             id="brand"
             value={field.brand}
             onChange={onBrandFilterChange}
             label="Brand"
             name="Brand" 
             disabled={isLoading || products.length === 0}
             >
               <MenuItem value=''> <em> {'None'} </em> </MenuItem>
               {[].map((item)=>{
                 return <MenuItem value={item}>{item}</MenuItem>
               })}
             </Select>
           </FormControl>

           {/* Sort By */}
           <FormControl variant='standard' sx={{width: '100%'}}>
            <InputLabel id="sortBy" sx={{ml:1}}>
               {' SortBy '}
             </InputLabel>
             <Select
             variant='standard'
             labelId="sortBy"
             id="sortBy"
             value={field.sortBy}
             onChange={onSortFilterChange}
             label="SortBy"
             name="SortBy" 
             disabled={isLoading || products.length === 0}
             >
               <MenuItem value=''> <em> {'None'} </em> </MenuItem>
               {[
                "Name Ascending A - Z",
                "Name Descending Z - A",
                "Price High - Low",
                "Price Low - High"
            ].map((item)=>{
                 return <MenuItem value={item}>{item}</MenuItem>
               })}
             </Select>
           </FormControl>

           
           {/* Price Range */}
           <Box>
            <span>Price Range</span>
                <br />
                <br />
                {(products.length === 0 && isLoading) || max === 0 ? (
                <Typography variant="h5">Loading Filter</Typography>
                ) : products.length === 1 ? (
                <Typography variant="h5">No Price Range</Typography>
                ) : (
                <PriceRange
                    min={min}
                    max={max}
                    initMin={field.minPrice}
                    initMax={field.maxPrice}
                    isLoading={isLoading}
                    onPriceChange={onPriceChange}
                    productsCount={products.length}
                />
                )}
           </Box>

           <Box>
            <ButtonGroup>
                <Button
                    type="Submit"
                    // fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2}}
                    disabled={isLoading || products.length === 0}
                    onClick={onApplyFilter}>
                    Apply filters
                </Button>
                <Button
                    type="Submit"
                    // fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2}}
                    disabled={isLoading || products.length === 0}
                    onClick={onResetFilter}>
                    Reset filters
                </Button>
            </ButtonGroup>
           </Box>
    </Box>
  )
}


Filters.propTypes = {
    closeModal: PropType.func.isRequired
  };
  
  export default Filters;
  