import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import "./App.css";

function App() {
    const [allCases, setAllCases] = useState({});
    useEffect(() => {
        fetch("https://coronavirus-19-api.herokuapp.com/all")
            .then(res => res.json())
            .then(data => setAllCases(data));
    }, []);

    let display = null;
    if (allCases.length === 0) {
        display = <h1>Loading</h1>;
    } else {
        let cases = allCases["cases"];
        let deaths = allCases["deaths"];
        let recovered = allCases["recovered"];
        display = (
            <Paper
                style={{ display: "inline-block", padding: "20px" }}
                elevation={3}
            >
                <ul
                    style={{
                        listStyleType: "none",
                        padding: "0",
                        display: "inline-block"
                    }}
                >
                    <li>😷 Cases: {cases}</li>
                    <li>💀 Deaths: {deaths}</li>
                    <li>😊 Recovered: {recovered}</li>
                </ul>
            </Paper>
        );
    }

    return (
        <div className="App">
            <h1>Covid-19 🦠</h1>
            <h3>Global Overview</h3>
            {display}
        </div>
    );
}

export default App;
