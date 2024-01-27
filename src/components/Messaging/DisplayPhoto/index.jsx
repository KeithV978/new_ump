// import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";

export const DisplayPhoto = ({ Image }) => {
  // const theme = useTheme();
  return (
    <span style={{ marginRight: "1rem" }}>
      <Badge color="info" variant="dot" invisible={false} overlap="circular">
        <div
          style={{
            backgroundImage: `url('${Image}')`,
            backgroundSize: "cover",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
          }}
        ></div>
      </Badge>
    </span>
  );
};
