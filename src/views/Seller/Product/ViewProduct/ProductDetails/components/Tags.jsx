import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

const Tags = ({ items }) => {
  return (
    <Grid container spacing={1}>
      {items.map((item, index) => {
        return (
          <Grid item key={index}>
            <Link to={`/search/${item}`} style={{cursor: 'pointer'}}>
              <Chip label={item} size="small" />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Tags;
