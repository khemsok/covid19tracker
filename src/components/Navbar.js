import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import FlareIcon from "@material-ui/icons/Flare";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Box from "@material-ui/core/Box";

function Navbar({ themeChange, mode }) {
  const displayIconClick =
    mode === "light" ? (
      <IconButton>
        <FlareIcon style={{ fontSize: "1.75em" }} />
      </IconButton>
    ) : (
      <IconButton>
        <Brightness2Icon style={{ fontSize: "1.75em" }} />
      </IconButton>
    );
  return (
    <Box
      width="100%"
      zIndex="tooltip"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      style={{ marginTop: "30px", marginBottom: "10px" }}
    >
      <Typography variant="h2" style={{ fontWeight: 800 }}>
        COVID
        <span style={{ color: "red" }}>
          19{" "}
          <span role="img" aria-label="angry">
            👿
          </span>
        </span>
      </Typography>
      <div onClick={themeChange}>{displayIconClick}</div>
    </Box>
  );
}

export default Navbar;
