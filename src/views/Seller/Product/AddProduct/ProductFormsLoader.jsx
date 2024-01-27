import * as React from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// form imports by lazy loading
const PhoneForm = React.lazy(() => import("../../components/productForms/Phone"));
const FoodForm = React.lazy(() => import("../../components/productForms/Food"));
const FashionForm = React.lazy(() => import("../../components/productForms/Fashion"));
const ClothingAccessoriesForm = React.lazy(() =>
  import("../../components/productForms/ClothingAccessories")
);
const GadgetsForm = React.lazy(() => import("../../components/productForms/Gadgets"));
const RealEstateForm = React.lazy(() =>
  import("../../components/productForms/RealEstate")
);
const FurnitureForm = React.lazy(() =>
  import("../../components/productForms/Furniture")
);
const BookForm = React.lazy(() => import("../../components/productForms/Book"));
const HomeAppliancesForm = React.lazy(() =>
  import("../../components/productForms/HomeAppliances")
);
const ComputerForm = React.lazy(() =>
  import("../../components/productForms/Computer")
);
const VehiclesForm = React.lazy(() =>
  import("../../components/productForms/Vehicles")
);
const ServicesForm = React.lazy(() =>
  import("../../components/productForms/Services")
);

export const ProductFormsLoader = ({category, mode}) => {
  const [isLoading, setLoading] = React.useState(false);
   // const handleNext = data => console.log(data);
  //  const stepValidation = (list) => {
  //   validateStep(list)
  //  }

  const onSubmit = (data) => {
    setLoading(true)
    console.log(data)
    setLoading(false)
  }
    return(
        <React.Suspense
        fallback={
          <Box flex>
            <LoadingOutlined />
            <Typography variant="h6">Loading....</Typography>
          </Box>
        }
      >
        {(() => {
          switch (category) {
            case "mobile_devices":
              return (
                <PhoneForm
                  mode={mode}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    brand: "",
                    category: "phones",
                    headline: "",
                    sub_category: "",
                    color: "",
                    newness: "",
                    ramsize: "",
                    storage: "",
                    battery: "",
                    screensize: "",
                    frontcamera: "",
                    backcamera: "",
                    description: "",
                    simslot: "",
                    price: 0,
                    availableColors: [],
                    imageUrls: [],
                    numberOfViews: 0,
                    tags: ["phone", "mobile", "mobile phone"],
                  }}
                />
              );

            case "foods":
              return (
                <FoodForm
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    category: "foods",
                    headline: "",
                    sub_category: "",
                    price: 0,
                    imageUrls: [],
                    numberOfViews: 0,
                    description: "",
                    tags: ["food", "tasty"],
                  }}
                />
              );

            case "fashion":
              return (
                <FashionForm
                mode={mode}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    category: "fashion",
                    headline: "",
                    sub_category: "",
                    gender: "",
                    price: 0,
                    size: "",
                    quantity: "",
                    availableColors: [],
                    imageUrls: [],
                    numberOfViews: 0,
                    newness: "",
                    description: "",
                    tags: ["Fashion", "clothing", "beauty"],
                  }}
                />
              );

            case "gadgets":
              return (
                <GadgetsForm
                mode={mode}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    brand: "",

                    category: "gadgets",
                    headline: "",
                    sub_category: "",
                    color: "",
                    newness: "",
                    price: 0,
                    imageUrls: [],
                    numberOfViews: 0,
                    description: "",
                    tags: ["Gadget", "Device"],
                  }}
                />
              );

            case "real_estate":
              return (
                <RealEstateForm
                mode={mode}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    location: "",

                    category: "real_estate",
                    headline: "",
                    sub_category: "",
                    amenities: {},
                    description: "",
                    price: 0,
                    imageUrls: [],
                    numberOfViews: 0,
                    newness: "",
                    tags: ["real estate"],
                  }}
                />
              );

            case "furnitures":
              return (
                <FurnitureForm
                mode={mode}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    category: "furnitures",
                    headline: "",
                    sub_category: "",
                    set: "",
                    price: 0,
                    imageUrls: [],
                    numberOfViews: 0,
                    newness: "",
                    description: "",
                    tags: ["furniture"],
                  }}
                />
              );

            case "books":
              return (
                <BookForm
                mode={mode}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    category: "books",
                    headline: "",
                    sub_category: "",
                    course_title: "",
                    year_written: "",
                    author: "",
                    price: 0,
                    imageUrls: [],
                    numberOfViews: 0,
                    newness: "",
                    description: "",
                    tags: ["book", "books"],
                  }}
                />
              );

            case "home_appliances":
              return (
                <HomeAppliancesForm
                mode={mode}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    category: "home_appliances",
                    headline: "",
                    sub_category: "",
                    itemName: "",
                    quantity: "",
                    size: "",
                    price: 0,
                    imageUrls: [],
                    numberOfViews: 0,
                    newness: "",
                    description: "",
                    tags: ["home appliances", "appliances", "electric"],
                  }}
                />
              );
            case "computers":
              return (
                <ComputerForm
                mode={mode}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    category: "computers",
                    headline: "",
                    sub_category: "",
                    brand: "",
                    newness: "",
                    color: "",
                    ramsize: "",
                    storage: "",
                    battery: "",
                    screensize: "",
                    price: 0,
                    imageUrls: [],
                    numberOfViews: 0,
                    description: "",
                    tags: ["computers", "computer"],
                  }}
                />
              );
            case "vehicles":
              return (
                <VehiclesForm
                mode={mode}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    category: "vehicles",
                    headline: "",
                    sub_category: "",
                    brand: "",
                    model: "",
                    color: "",
                    interior: "",
                    year: "",
                    accidented: "",
                    price: 0,
                    imageUrls: [],
                    numberOfViews: 0,
                    newness: "",
                    description: "",
                    tags: ["vehicle", "car", "cars"],
                  }}
                />
              );
            case "services":
              return (
                <ServicesForm
                mode={mode}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    category: "services",
                    sub_category: "",
                    headline: "",
                    service: "",
                    phone: "",
                    address: "",
                    imageUrls: [],
                    numberOfViews: 0,
                    description: "",
                    tags: ["service", "shop"],
                  }}
                />
              );
            case "fashion_accessories":
              return (
                <ClothingAccessoriesForm
                mode={mode}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                  product={{
                    category: "fashion_accessories",
                    headline: "",
                    sub_category: "",
                    brand: "",
                    color: "",
                    material: "",
                    gender: "",
                    price: 0,
                    imageUrls: [],
                    numberOfViews: 0,
                    newness: "",
                    tags: ["fashion", "accessory", "accessories"],
                    description: "",
                  }}
                />
              );
            default:
              return (
                <>
                  {/* <Typography variant="h6"> */}
                  <em style={{ fontWeight: "bold" }}>
                    {" "}
                    {/* {"No category selected."} */}
                  </em>
                  {/* </Typography> */}
                  {/* <img
                    src={add_category}
                    alt="no category selected"
                    width="10%"
                  /> */}
                 
                </>
              );
          }
        })()}
      </React.Suspense>
    )
}