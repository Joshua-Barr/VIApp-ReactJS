import React, { useState } from "react";
import ShareSort from "../components/SharesSort";

import "../styles.css";

export default function SNP100() {
    const [sortBy, setSortBy] = useState('none');
    const [shares, setShares] = useState(<div className="spinner">Select an indicator above...  </div>)

    const Symbols = ["AAPL","ABBV","ABT","ACN","ADBE","AIG","AMGN","AMT","AMZN","AVGO","AXP","BA","BAC","BIIB","BK","BKNG","BLK","BMY","BRK.B","C","CAT","CHTR","CL","CMCSA","COF","COP","COST","CRM","CSCO","CVS","CVX","DD","DHR","DIS","DOW","DUK","EMR","EXC","F","FB","FDX","GD","GE","GILD","GM","GOOG","GOOGL","GS","HD","HON","IBM","INTC","JNJ","JPM","KHC","KO","LIN","LLY","LMT","LOW","MA","MCD","MDLZ","MDT","MET","MMM","MO","MRK","MS","MSFT","NEE","NFLX","NKE","NVDA","ORCL","PEP","PFE","PG","PM","PYPL","QCOM","RTX","SBUX","SO","SPG","T","TGT","TMO","TMUS","TSLA","TXN","UNH","UNP","UPS","USB","V","VZ","WBA","WFC","WMT","XOM"];

    const handleChange = event => {
      setSortBy(event.target.value);
      setShares(<ShareSort Symbols={Symbols} />)
    };

    return (
      <div>
      <select name="sort" id="sortables" onChange={handleChange} >
          <option value="none"></option>
          <option value="fair price">Price Ratio (Fair/Current)</option>
          <option value="stock price">Current Stock Price</option>
        </select>
        <div>
          {shares}
        </div>
      </div>
    );
}





