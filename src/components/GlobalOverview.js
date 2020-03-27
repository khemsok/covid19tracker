import React, { useState, useEffect, Fragment } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

import GlobalSection from "./GlobalSection";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function GlobalOverview() {
  const [allCases, setAllCases] = useState({});
  useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/all")
      .then(res => res.json())
      .then(data => setAllCases(data));
  }, []);

  let dataStatus = Object.keys(allCases).length !== 0 ? true : false;

  let displayGlobalSection =
    Object.keys(allCases).length === 0 ? (
      <Fragment>
        <Grid item xs={12} md={4}>
          <GlobalSection dataStatus={false} />
        </Grid>
        <Grid item xs={12} md={4}>
          <GlobalSection dataStatus={false} />
        </Grid>
        <Grid item xs={12} md={4}>
          <GlobalSection dataStatus={false} />
        </Grid>
      </Fragment>
    ) : (
      <Fragment>
        <Grid item xs={12} md={4}>
          <GlobalSection
            header="😥 Cases"
            dataStatus={true}
            casualties={allCases["cases"]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <GlobalSection
            header="💀 Deaths"
            dataStatus={true}
            casualties={allCases["deaths"]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <GlobalSection
            header="😃 Recovered"
            dataStatus={true}
            casualties={allCases["recovered"]}
          />
        </Grid>
      </Fragment>
    );

  const lastUpdated = (
    <Grid container justify="flex-end" spacing={8}>
      <Grid item xs={7} md={4}>
        {Object.keys(allCases).length === 0 ? (
          <LinearProgress variant="buffer" />
        ) : (
          <Typography style={{ float: "right" }}>
            Last Updated: 01/01/1970 00:00:00
          </Typography>
        )}
      </Grid>
    </Grid>
  );

  return (
    <Fragment>
      <Typography
        variant="h5"
        style={{ margin: "20px 0", fontWeight: "ligher" }}
      >
        Global Overview
      </Typography>
      <Grid container justify="center" alignItems="center" spacing={4}>
        {displayGlobalSection}
      </Grid>
      {/* {lastUpdated} */}
    </Fragment>
  );
}

export default GlobalOverview;
