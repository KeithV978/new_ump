import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  // margin: ".5rem 0 0 0",
  padding: ".4rem 1rem",
  // display: "flex",
  // justifyContent: "space-between",
  backgroundColor: '#9c27b0',
  boxShadow: "0px 11px 20px 0px #dbdbdb",
  // border: `1px solid ${[theme.palette.primary.main]}`,
  color: "#fff",
  fontWeight: "bold",
  borderRadius: "5px",
  // borderTop: `1px solid ${[theme.palette.primary.main]}`,
  // borderBottom: `1px solid ${[theme.palette.tertiary.main]}`,
  // backgroundImage: `linear-gradient(35deg, ${[theme.palette.primary.main]}, ${[
    // theme.palette.tertiary.main,
  // ]})`,
}));
const TitleBar = ({ children, white }) => {
  const theme = useTheme();
  return (
    <div>
      <Wrapper
        sx={{
          backgroundImage: white
            ? `${[theme.palette.common.white]}`
            : `linear-gradient(35deg, ${[theme.palette.primary.main]}, ${[
                theme.palette.tertiary.main,
              ]})`,
              color: '#fff',
        }}
      >
        {children}
      </Wrapper>
    </div>
  );
};
export default TitleBar;
