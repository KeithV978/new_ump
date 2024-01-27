import React, { lazy, Suspense } from 'react';
import { useDocumentTitle, useScrollTop, useProduct } from '../../../../hooks';
import { LoadingOutlined } from '@ant-design/icons';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editProduct } from '../../../../Redux/actions/product_actions';
import { Box, Container, Divider, Paper, Typography } from '@mui/material';

const PhoneForm = lazy(() => import('../../components/productForms/Phone'))
const FoodForm = lazy(() => import('../../components/productForms/Food'))
const FashionForm = lazy(() => import('../../components/productForms/Fashion'))
const ClothingAccessoriesForm = lazy(() => import('../../components/productForms/ClothingAccessories'))
const GadgetsForm = lazy(() => import('../../components/productForms/Gadgets'))
const RealEstateForm = lazy(() => import('../../components/productForms/RealEstate'))
const FurnitureForm = lazy(() => import('../../components/productForms/Furniture'))
const BookForm = lazy(() => import('../../components/productForms/Book'))
const HomeAppliancesForm = lazy(() => import('../../components/productForms/HomeAppliances'))
const ComputerForm = lazy(() => import('../../components/productForms/Computer'))
const VehiclesForm = lazy(() => import('../../components/productForms/Vehicles'))
const ServicesForm = lazy(() => import('../../components/productForms/Services'))

const EditProduct = ({ match }) => {
  useScrollTop();
  useDocumentTitle('Edit Product | Uniben Marketplace');
  const { product, error, isLoading} = useProduct(match.params.id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitForm = (updates) => {
    let {category} = updates;
    dispatch(editProduct(product.id, category, updates))
  }

  return (
    <Box sx={{mt:10}}>
      {error && navigate('/Seller/dashboard')}
      <Box component={Paper} elevation={1} sx={{p:2}}>
          <Typography variant='h5'>Edit Product</Typography>
      </Box>        

      <Box sx={{backgroundColor: '#f6f6f6', pt:2, pb:2}}>
          <Container>
            <Box component={Paper} elevation={1} sx={{borderRadius: "15px", backgroundColor: '#fff', p:2 }}>
               <Divider/> 
               <Box>   
                  <br/>
                  <Suspense fallback={(
                    <Box flex>
                      <LoadingOutlined/><Typography variant='h6'>Loading....</Typography>
                    </Box>
                    )}>
                  
                    {(() => {
                      switch (product.category) {
                        case "phone":
                          return <PhoneForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;                      
                        case 'foods':
                          return <FoodForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;
                        case 'fashion':
                          return <FashionForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;
                        case 'gadgets':
                          return <GadgetsForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;
                        case 'real_estate':
                          return <RealEstateForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;
                        case 'furnitures':
                          return <FurnitureForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;;
                        case 'books':
                          return <BookForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;
                          case 'home_appliances':
                            return <HomeAppliancesForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;
                          case 'computers':
                            return <ComputerForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;
                          case 'vehicles':
                            return <VehiclesForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;
                          case 'services':
                            return <ServicesForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;
                          case 'fashion_accessories':
                            return <ClothingAccessoriesForm onSubmit={onSubmitForm} isLoading={isLoading} product={product}/>;
                        default:
                          break;
                      }
                    })()}  
                  </Suspense>
                </Box>
            </Box>
          </Container>
        </Box>
    </Box>
  )
}

EditProduct.propTypes = {
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string
    })
  }).isRequired
};

export default EditProduct