import React, { useState, useEffect } from "react";
import AccordionApp from "./AccordionApp";
import "../styles.css";

const gitHubUrl = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo";

function Sharesdisplay() {
  const [userData, setUserData] = useState({});
  

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> List of Shares </h1>
      </header>
      
      <div className="user-container">
        <AccordionApp title={userData.Symbol} currency={userData.Currency}/>
      </div>
    </div>
  );
}

export default Sharesdisplay;