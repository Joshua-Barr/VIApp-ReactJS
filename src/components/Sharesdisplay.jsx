import React, { useState, useEffect } from "react";
import AccordionApp from "./AccordionApp";
import "../styles.css";


function Sharesdisplay(props) {
  const [userData, setUserData] = useState({});

  const stockUrl = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + props.Symbol + "&apikey=7TRVF3DH5SBONXZY";
  
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
      
      <div className="user-container">
      <AccordionApp tracker={props.Symbol} name={userData.Name} currency={userData.Currency} industry={userData.Industry} sector={userData.Sector} description={userData.Description} />
      </div>
    </div>
  );
}

export default Sharesdisplay;