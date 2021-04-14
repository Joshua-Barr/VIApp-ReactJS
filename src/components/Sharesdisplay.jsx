import React, { useState, useEffect } from "react";
import AccordionApp from "./AccordionApp";
import "../styles.css";

const trackers = ["WES.AX","CBA.AX"];

const stockUrl = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=WES&apikey=7TRVF3DH5SBONXZY";











function Sharesdisplay() {
  const [userData, setUserData] = useState({});
  

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(stockUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>List of Shares</h1>
      </header>
      
      <div className="user-container">
        <AccordionApp tracker={userData.Symbol} name={userData.Name} currency={userData.Currency} industry={userData.Industry} sector={userData.Sector} description={userData.Description} />
      </div>
    </div>
  );
}

export default Sharesdisplay;