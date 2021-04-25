import React, { useState, useEffect } from "react";
import AccordionApp from "../components/AccordionApp";

import "../styles.css";

function Sharesdisplay(props) {
  const [userData, setUserData] = useState({});

  const stockUrl = "http://localhost:9000/api/" + props.Symbol;
  
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
        <AccordionApp 
          tracker={props.Symbol} 
          name={userData.longName} 
          currency={userData.currency} 
          industry={userData.industry} 
          sector={userData.sector} 
          description={userData.longBusinessSummary} 
          />
          
        </div>
      </div>
    
  );
}

export default Sharesdisplay;