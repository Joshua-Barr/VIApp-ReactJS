import React, { useState, useEffect } from "react";
import AccordionApp from "./AccordionApp";

import "../styles.css";

function Sharesdisplay(props) {
  const [userData, setUserData] = useState({});

  const stockUrl = "http://localhost:9000/api/" + props.Symbol;
  
  useEffect(() => {
    
    getStockFetch();
  }, []);

  const getStockFetch = async () => {
    
    const response = await fetch(stockUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
      <div className="App">
        <div className="user-container">
        <AccordionApp 
          userData={userData}
          tracker={props.Symbol}
          />
        </div>
      </div>
    
  );
}

export default Sharesdisplay;