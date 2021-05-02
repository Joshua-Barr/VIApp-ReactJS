import React, { useState, useRef } from "react";

import Chevron from "./Chevron";

import "../styles.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  
  const [setColourKey2, setColourKey2State] = useState("Grey")
  const [setColourKey3, setColourKey3State] = useState("Grey")
  const [setColourKey4, setColourKey4State] = useState("Grey")
  const [setColourKey5, setColourKey5State] = useState("Grey")
  const [setColourKey6, setColourKey6State] = useState("Grey")
  const [setColourKey7, setColourKey7State] = useState("Grey")
  const [setColourKey8, setColourKey8State] = useState("Grey")
  const [setColourKey9, setColourKey9State] = useState("Grey")
  const [setColourKey10, setColourKey10State] = useState("Grey")
  const [setColourKey11, setColourKey11State] = useState("Grey")
  const [setColourKey12, setColourKey12State] = useState("Grey")
  const [setColourKey13, setColourKey13State] = useState("Grey")
  const [setColourKey14, setColourKey14State] = useState("Grey")
  const [setColourKey15, setColourKey15State] = useState("Grey")

  const content = useRef(null);
  const table = "table";
  const info = "info";
  const logo_text = "company logo";
  const link = "link";

  const [setAnalysis, setAnalysisState] = useState({ data: "null" })

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );

    if(typeof props.userData.analysis !== "undefined"){
      setAnalysisState( {
        data: "recived",
      })
      if(typeof props.userData.analysis.recommendationTrend.trend !== "undefined"){
        if(typeof props.userData.analysis.financialData !== "undefined"){
          setAnalysisState( {
            debtToEquity: props.userData.analysis.financialData.debtToEquity,
            returnOnEquity: props.userData.analysis.financialData.returnOnEquity,
            growthRate: props.userData.analysis.earningsTrend.trend[4].growth,
            
            rec0mperiod: props.userData.analysis.recommendationTrend.trend[0].period,
            rec0mstrongbuy: props.userData.analysis.recommendationTrend.trend[0].strongBuy,
            rec0mbuy: props.userData.analysis.recommendationTrend.trend[0].buy,
            rec0mhold: props.userData.analysis.recommendationTrend.trend[0].hold,
            rec0msell: props.userData.analysis.recommendationTrend.trend[0].sell,
            rec0mstrongsell: props.userData.analysis.recommendationTrend.trend[0].sell,
            rec1mperiod: props.userData.analysis.recommendationTrend.trend[1].period,
            rec1mstrongbuy: props.userData.analysis.recommendationTrend.trend[1].strongBuy,
            rec1mbuy: props.userData.analysis.recommendationTrend.trend[1].buy,
            rec1mhold: props.userData.analysis.recommendationTrend.trend[1].hold,
            rec1msell: props.userData.analysis.recommendationTrend.trend[1].sell,
            rec1mstrongsell: props.userData.analysis.recommendationTrend.trend[1].sell,
            rec2mperiod: props.userData.analysis.recommendationTrend.trend[2].period,
            rec2mstrongbuy: props.userData.analysis.recommendationTrend.trend[2].strongBuy,
            rec2mbuy: props.userData.analysis.recommendationTrend.trend[2].buy,
            rec2mhold: props.userData.analysis.recommendationTrend.trend[2].hold,
            rec2msell: props.userData.analysis.recommendationTrend.trend[2].sell,
            rec2mstrongsell: props.userData.analysis.recommendationTrend.trend[2].sell,
            rec3mperiod: props.userData.analysis.recommendationTrend.trend[3].period,
            rec3mstrongbuy: props.userData.analysis.recommendationTrend.trend[3].strongBuy,
            rec3mbuy: props.userData.analysis.recommendationTrend.trend[3].buy,
            rec3mhold: props.userData.analysis.recommendationTrend.trend[3].hold,
            rec3msell: props.userData.analysis.recommendationTrend.trend[3].sell,
            rec3mstrongsell: props.userData.analysis.recommendationTrend.trend[3].sell
          
          })
        }
      }
    }

    if(props.userData.earningsQuarterlyGrowth > 0.25){setColourKey2State("Lime");}
    else{
      if(props.userData.earningsQuarterlyGrowth > 0.1){setColourKey2State("Orange");}
      else{setColourKey2State("Brown");}
    }
    
    if(props.userData.trailingPE < 20){setColourKey3State("Lime");}
    else{
      if(props.userData.trailingPE < 40){setColourKey3State("Orange");}
      else{setColourKey3State("Brown");}
    }

    if(setAnalysis.growthRate >= 0.20){setColourKey5State("Lime");}
    else{
      if(setAnalysis.growthRate > 0.1){setColourKey5State("Orange");}
      else{setColourKey5State("Brown");}
    }
    
    if(props.userData.pegRatio < 1){setColourKey6State("Lime");}
    else{
      if(props.userData.pegRatio <= 1.5){setColourKey6State("Orange");}
      if(props.userData.pegRatio > 1.5){setColourKey6State("Brown");}
      
    }
    if(props.userData.pegRatio < 0){setColourKey6State("Brown");}
    if(props.userData.pegRatio === 0){setColourKey6State("Grey");}

    if(props.userData.fiveYearAvgDividendYield > 2){setColourKey7State("Lime");}
    else{
      if(props.userData.fiveYearAvgDividendYield >= 1){setColourKey7State("Orange");}
      if(props.userData.fiveYearAvgDividendYield < 1){setColourKey7State("Brown");}
      
    }
    if(props.userData.fiveYearAvgDividendYield === 0){setColourKey7State("Grey");}
    
    if(setAnalysis.debtToEquity/100 < 0.75){setColourKey9State("Lime");}
    else{
      if(setAnalysis.debtToEquity/100 <= 1.0){setColourKey9State("Orange");}
      if(setAnalysis.debtToEquity/100 > 1.0){setColourKey9State("Brown");}
      
    }
    if(setAnalysis.debtToEquity/100 < 0){setColourKey9State("Brown");}
    if(setAnalysis.debtToEquity/100 === 0){setColourKey9State("Grey");}
    
    if(setAnalysis.returnOnEquity >= 0.2){setColourKey10State("Lime");}
    else{
      if(setAnalysis.returnOnEquity >= 0.1){setColourKey10State("Orange");}
      else{setColourKey10State("Brown");} 
    }
    if(setAnalysis.returnOnEquity === 0){setColourKey10State("Grey");}
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.tracker}: {props.userData.longName}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#665"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        
        <div
          className="accordion__text"
        />
        <table id={table}>
          <tr>
            <td><div class={info}><img src={props.userData.logo_url} alt={logo_text}/>
              <br/>Industry: {props.userData.industry} 
              <br/> Sector: {props.userData.sector}
              <br/> Country: {props.userData.country}
              <br/> Address: {props.userData.address}
              <br/> State: {props.userData.state}
              <br/> Phone: {props.userData.phone}
              <br/> Website: <a class={link} href={props.userData.website}>{props.userData.website}</a>
              <br/> Sector: {props.userData.sector}
              <h3 style={{color: "darkgrey"}}><br/>Price: {props.userData.regularMarketPrice} | Daily High: {props.userData.regularMarketDayHigh}</h3>
              <h3 style={{color: "darkgrey"}}>Last Open: {props.userData.open} | Last Close: {props.userData.previousClose}</h3>
            </div></td>

            <td><div><h3>KEY INDICATORS: </h3></div>
              <div style={{color: `${setColourKey2}`}}><h3> (Value) Quarterly Earnings Growth (YoY): {parseFloat(props.userData.earningsQuarterlyGrowth*100).toPrecision(4)}% </h3></div>
              <div style={{color: `${setColourKey5}`}}><h3> (Growth) Predicted Growth in 5 Years: {parseFloat(setAnalysis.growthRate*100).toPrecision(4)}% </h3></div>
              <div style={{color: `${setColourKey6}`}}><h3> (Growth) Price / Earnings / Growth (P/E/G): {props.userData.pegRatio} </h3></div>
              <div style={{color: `${setColourKey7}`}}><h3> (Management) Five Year Ave Dividend Yeild: {props.userData.fiveYearAvgDividendYield}% </h3></div>
              <div style={{color: `${setColourKey9}`}}><h3> (Management) Debt to Equity Ratio: {parseFloat(setAnalysis.debtToEquity/100).toPrecision(4)} </h3></div>
              <div style={{color: `${setColourKey10}`}}><h3> (Management) Return on Equity: {parseFloat(setAnalysis.returnOnEquity*100).toPrecision(4)}% </h3></div>
              <div style={{color: `${setColourKey11}`}}><h3> (Management) Earnings Per Share <br/> Forward EPS: {props.userData.forwardEps} <br/> Trailing EPS: {props.userData.trailingEps} </h3></div>
              <div style={{color: `${setColourKey3}`}}><h3> (Value) Price to Earnings <br/> Forward PE: {parseFloat(props.userData.forwardPE).toPrecision(4)} <br/> Trailing PE: {parseFloat(props.userData.trailingPE).toPrecision(4)} </h3></div>
              <div style={{color: `${setColourKey8}`}}><h3> <br/>Last 5yrs Earnings: </h3></div>

              <div style={{color: `${setColourKey12}`}}><h3><br/> Calculated Fair Price (Based on Growth Rate): {parseFloat(((1+(setAnalysis.growthRate))** 5) * ((props.userData.forwardEps + props.userData.trailingEps)/2) * ((props.userData.forwardPE + props.userData.trailingPE)/2)).toPrecision(4)}</h3></div>

              <div style={{color: `${setColourKey13}`}}><h3> Calculated Fair Price at 30% CI (Based on Growth Rate): {parseFloat((((1+(setAnalysis.growthRate))** 5) * ((props.userData.forwardEps + props.userData.trailingEps)/2) * ((props.userData.forwardPE + props.userData.trailingPE)/2))*0.7).toPrecision(4)}</h3></div>
              <div style={{color: `${setColourKey14}`}}><h3> Calculated Fair Price at 50% CI (Based on Growth Rate): {parseFloat((((1+(setAnalysis.growthRate))** 5) * ((props.userData.forwardEps + props.userData.trailingEps)/2) * ((props.userData.forwardPE + props.userData.trailingPE)/2))*0.5).toPrecision(4)}</h3></div>
              
              <div style={{color: `${setColourKey15}`}}><h3><br/> Calculated 8% Stoploss on Current Price: {parseFloat((props.userData.regularMarketPrice/100)*92).toPrecision(4)} </h3></div>
              <div style={{color: "Grey"}}><h3><br/> Recommendation Trends, by Month: </h3></div>
              <div style={{color: "Grey"}}><h3> Period {setAnalysis.rec0mperiod} <br/> Strong Buy: {setAnalysis.rec0mstrongbuy} Buy: {setAnalysis.rec0mbuy} Hold: {setAnalysis.rec0mhold} Sell: {setAnalysis.rec0msell} StrongSell: {setAnalysis.rec0mstrongsell}</h3></div>
              <div style={{color: "Grey"}}><h3> Period {setAnalysis.rec1mperiod} <br/> Strong Buy: {setAnalysis.rec1mstrongbuy} Buy: {setAnalysis.rec1mbuy} Hold: {setAnalysis.rec1mhold} Sell: {setAnalysis.rec1msell} StrongSell: {setAnalysis.rec1mstrongsell}</h3></div>
              <div style={{color: "Grey"}}><h3> Period {setAnalysis.rec2mperiod} <br/> Strong Buy: {setAnalysis.rec2mstrongbuy} Buy: {setAnalysis.rec2mbuy} Hold: {setAnalysis.rec2mhold} Sell: {setAnalysis.rec2msell} StrongSell: {setAnalysis.rec2mstrongsell}</h3></div>
              <div style={{color: "Grey"}}><h3> Period {setAnalysis.rec3mperiod} <br/> Strong Buy: {setAnalysis.rec3mstrongbuy} Buy: {setAnalysis.rec3mbuy} Hold: {setAnalysis.rec3mhold} Sell: {setAnalysis.rec3msell} StrongSell: {setAnalysis.rec3mstrongsell}</h3></div>
              
            </td>
          </tr>
        </table>
        <div><p><b>{props.userData.longBusinessSummary}</b></p></div>
      </div>
    </div>
  );
}
export default Accordion;