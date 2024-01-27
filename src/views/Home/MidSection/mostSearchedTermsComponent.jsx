import * as React from "react";
import { useSelector, } from "react-redux";
import {Link} from 'react-router-dom'

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const MostSearchedTermsComponent = () => {
  const [theList, setTheList] = React.useState([]);
  const { mostSearchedTerms } = useSelector((state) => ({
    mostSearchedTerms: state.products.mostSearchedTerms,
  }));

  React.useEffect(() => {
    setTheList([
      "air jordan",
      "ring light",
      "nursing books",
      "camry",
      "iphone x",
    ]);
  }, []);

  // limit the list to five
  const handleDelete = () => {};

  return (
    <div style={{ paddingBottom: "1rem" }}>
      <Typography sx={{ paddingBottom: ".5rem" }}>
        Your most recent searches
      </Typography>
      <Stack direction="row" spacing={1}>
        {theList.map((item, index) => {
          return (
            <Link to={`/search?q=${item}`}>
              <Chip
                color="secondary"
                key={index}
                label={item}
                onDelete={handleDelete}
                variant="outlined"
              />
            </Link>
          );
        })}
      </Stack>
    </div>
  );
};
