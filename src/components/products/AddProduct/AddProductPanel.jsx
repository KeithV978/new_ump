import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { useFileHandler } from "../../../hooks";
import { ImageLoader } from "../../ImageLoader";

import CloseRounded from "@mui/icons-material/CloseRounded";
import CameraAltRounded from "@mui/icons-material/CameraAltRounded";

export const AddProductPanel = () => {
  const { imageFile, isFileLoading, onFileChange, removeImage } =
    useFileHandler({ imageCollection: [] });

  console.log(imageFile);
  const handleAddProductPopup = () => {};
  return (
    <React.Fragment>
      <Box
        sx={{
          borderRadius: "20px",
          padding: "1rem 0",
          margin: "auto",
          // border: "1px solid #ccc",
        }}
      >
        <div>
          <Typography variant="p" sx={{ lineHeight: "1rem" }}>
            Post an item for buyers to see
          </Typography>

          {imageFile.imageCollection.length > 0 ? (
            <div
              style={{
                width: "100%",
                height: "20vh",
              }}
            >
              {imageFile.imageCollection.map((image, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    width: "min-content",
                    backgroundColor: "#f6f6f6",
                    margin: ".5rem 0",
                  }}
                >
                  <ImageLoader
                    alt=""
                    src={image.url}
                    fileName={image.file.name}
                    size={image.size}
                  />
                  <IconButton
                    onClick={() =>
                      removeImage({
                        id: image.id,
                        name: "imageCollection",
                      })
                    }
                  >
                    <CloseRounded sx={{ fontSize: ".8rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          ) : (
            <label htmlFor="upload" style={{ cursor: "pointer" }}>
              <Box
                style={{
                  width: { xs: "100%", sm: "60%" },
                  height: "20vh",
                  // backgroundColor: "#f1f1f1fc",
                  border: "1px dotted #666666",
                  position: "relative",
                  borderRadius: "20px",
                  margin: "1rem",
                }}
              >
                <CameraAltRounded
                  onClick={handleAddProductPopup}
                  sx={{
                    color: "#666666",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "4rem",
                  }}
                />
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  accept="image/*"
                  hidden
                  disabled={isFileLoading}
                  onChange={(event) =>
                    onFileChange(event, {
                      name: "imageCollection",
                      type: "multiple",
                    })
                  }
                />
              </Box>
            </label>
          )}
          <Button
            variant="contained"
            color="secondary"
            sx={{ margin: "auto", display: "block", paddingTop: ".5rem" }}
            onClick={handleAddProductPopup}
          >
            Post
          </Button>
        </div>
      </Box>
    </React.Fragment>
  );
};
