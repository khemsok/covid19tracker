import React from "react";
import Typography from "@material-ui/core/Typography";

function Navbar() {
  return (
    <Typography variant="h2" style={{ margin: "30px 0", fontWeight: 800 }}>
      COVID<span style={{ color: "red" }}>19 👿</span>
    </Typography>
  );
}

export default Navbar;
