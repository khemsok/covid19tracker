import React, { useState, useEffect, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TopSection from "./TopSection";

function TopAffected() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then(res => res.json())
      .then(data => setAllData(data));
  }, []);

  console.log(allData.slice(0, 10));

  let displayCountries =
    allData.length !== 0
      ? allData
          .slice(0, 10)
          .map((element, index) => (
            <TopSection
              dataStatus={true}
              country={element["country"]}
              cases={element["cases"]}
              deaths={element["deaths"]}
              recovered={element["recovered"]}
              index={index + 1}
              active={element["active"]}
              critical={element["critical"]}
              todayDeaths={element["todayDeaths"]}
              todayCases={element["todayCases"]}
            />
          ))
      : [...Array(10)].map((element, index) => (
          <TopSection dataStatus={false} />
        ));

  return (
    <Container maxWidth="md">
      <Typography
        variant="h5"
        style={{ marginTop: "50px", marginBottom: "30px" }}
      >
        Top Affected Countries
      </Typography>
      {displayCountries}
    </Container>
  );
}

export default TopAffected;
