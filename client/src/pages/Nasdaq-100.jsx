import React, { useState } from "react";
import ShareSort from "../components/SharesSort";

import "../styles.css";

export default function Nasdaq100() {
    const [sortBy, setSortBy] = useState('none');
    const [shares, setShares] = useState(<div className="spinner">Select an indicator above...  </div>)
    
    const Symbols = ["ATVI","ADBE","AMD","ALXN","ALGN","GOOGL","GOOG","AMZN","AEP","AMGN","ADI","ANSS","AAPL","AMAT","ASML","TEAM","ADSK","ADP","BIDU","BIIB","BKNG","AVGO","CDNS","CDW","CERN","CHTR","CHKP","CTAS","CSCO","CTSH","CMCSA","CPRT","COST","CSX","DXCM","DOCU","DLTR","EBAY","EA","EXC","FB","FAST","FISV","FOXA","FOX","GILD","IDXX","ILMN","INCY","INTC","INTU","ISRG","JD","KDP","KLAC","KHC","LRCX","LULU","MAR","MRVL","MTCH","MXIM","MELI","MCHP","MU","MSFT","MRNA","MDLZ","MNST","NTES","NFLX","NVDA","NXPI","ORLY","OKTA","PCAR","PAYX","PYPL","PTON","PEP","PDD","QCOM","REGN","ROST","SGEN","SIRI","SWKS","SPLK","SBUX","SNPS","TMUS","TSLA","TXN","TCOM","VRSN","VRSK","VRTX","WBA","WDAY","XEL","XLNX","ZM"];
   
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