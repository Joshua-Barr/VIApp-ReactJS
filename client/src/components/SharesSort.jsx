import React, { useState, useEffect } from "react";
import AccordionApp from "./AccordionApp";

import "../styles.css";

function ShareSort(props) {
  const [userAccordion, setAccordion] = useState('');
  const [isLoaded] = useState(true);

  const stockUrl = "http://localhost:9000/Sort/" + props.Symbols;
  
  useEffect(() => {
    
    getStockFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStockFetch = async () => {
    
    
    const response = await fetch(stockUrl);
    const jsonData = await response.json(); 

    setAccordion(await jsonData.reverse().map((item) => <AccordionApp tracker={item.tracker} userData={item.data} isLoaded={isLoaded}/>))
  };
  
  return (
      <div className="App">
        <div className="user-container">
          {userAccordion}
        </div>
      </div>
    
  );
}

export default ShareSort;