import React, { useState, useEffect } from "react";
import AccordionApp from "./AccordionApp";

import "../styles.css";

function Sharesdisplay(props) {
  const [userData, setUserData] = useState({});
  const [isLoaded, setLoaded] = useState(false);

  const stockUrl = "http://localhost:9000/api/" + props.Symbol;
  
  useEffect(() => {
    
    getStockFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStockFetch = async () => {
    
    const response = await fetch(stockUrl);
    const jsonData = await response.json().then(setLoaded(true));
    setUserData(jsonData);
  };

  return (
      <div className="App">
        <div className="user-container">
        <AccordionApp 
          userData={userData}
          tracker={props.Symbol}
          isLoaded={isLoaded}
          />
        </div>
      </div>
    
  );
}

export default Sharesdisplay;