import { Delete, Edit, ViewHeadlineRounded } from "@mui/icons-material";
import { Box, Chip, IconButton, Paper, Typography } from "@mui/material";
import { displayMoney } from "../../../../../helpers/utils";

const ProfileProductCard = ({ products }) => {
  let { imageUrls, headline, sub_category, price } = products;

  const handleView = () => {
    alert("View Product");
  };
  const handleEdit = () => {
    alert("Edit Product");
  };
  const handleDelete = () => {
    alert("Delete Product");
  };

  return (
    <Box component={Paper} elevation={3}>
      <Box
        sx={{
          width: "100%",
          //   display: "flex",
          //   flexDirection: "row",
          //   height: { xs: "20vh", sm: "10vh" },
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        {/* Thumbnail */}
        <Box
          sx={{
            width: { xs: "100%", sm: "8%" },
            overflow: "hidden",
            alignItems: "center",
            padding: "1rem 0 0 0",
            margin: "0 .6rem",
            position: "relative",
            // borderRadius: "50%",
            //   border: "1px solid #ccc",
          }}
        > 
          <img
            src={imageUrls[0]}
            alt="product"
            width="100%"
            style={{ display: "inline-block" }}
          />
        </Box>

        {/* content */}
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            padding: 1,
            //   backgroundColor: 'ButtonFace'
          }}
        >
          {/* texts */}
          <Box>
            <div>
              <Typography
                variant="body2"
                sx={{ color: "#ccc", fontSize: "small" }}
              >
                {sub_category}
              </Typography>
              <Typography
                sx={{
                  padding: "0 .5rem",
                  margin: ".4rem 0",
                  backgroundColor: "#eee",
                  borderRadius: "25px",
                  color: "#282828",
                  //   fontWeight: "bold",
                  textTransform: "capitalize",
                  alignItems: "center",
                }}
              >
                {headline}
              </Typography>{" "}
              <Typography sx={{ color: "green" }}>
                {" "}
                <span style={{ color: "#282828" }}>Status</span> {"  ~  "}{" "}
                <Chip
                  size="small"
                  label={" Active "}
                  sx={{ backgroundColor: "blue", color: "#fff" }}
                />
              </Typography>
            </div>
            <Typography
              variant="p"
              sx={{
                color: "#282828",
                // fontWeight: "bold"
              }}
            >
              {"Price ~ "}
              <strong> {displayMoney(price)}</strong>
            </Typography>
          </Box>
        </Box>

        {/* action buttons */}
        <Box
          sx={{
            padding: ".6rem 0",
            pr: 4,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            float: "right",
            width: { xs: "100%", sm: "12%" },
            // backgroundColor: 'ButtonFace'
          }}
        >
          <IconButton onClick={handleView} sx={{ backgroundColor: "#eee" }}>
            <ViewHeadlineRounded sx={{ color: "#ccc" }} />
          </IconButton>

          <IconButton onClick={handleEdit} sx={{ backgroundColor: "#eee" }}>
            <Edit sx={{ color: "#ccc" }} />
          </IconButton>

          <IconButton onClick={handleDelete} sx={{ backgroundColor: "#eee" }}>
            <Delete sx={{ color: "#ccc" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileProductCard;
