import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import LinearProgress from "@material-ui/core/LinearProgress";

import Typography from "@material-ui/core/Typography";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import { numberWithCommas } from "../util/helper";

const useStyles = makeStyles({
  card: {
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

function GlobalSection({ header, dataStatus, casualties }) {
  const classes = useStyles();

  let display = dataStatus ? (
    <Fragment>
      <Typography variant="caption">{header}</Typography>
      <Typography variant="h2" style={{ fontWeight: "800" }}>
        {numberWithCommas(casualties)}
      </Typography>
    </Fragment>
  ) : null;

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardContent>{display}</CardContent>
      </Card>
      {dataStatus ? null : <LinearProgress />}
    </Fragment>
  );
}

export default GlobalSection;
