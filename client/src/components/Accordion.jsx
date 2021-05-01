import React, { useState, useRef } from "react";

import Chevron from "./Chevron";

import "../styles.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  
  const [setColourKey1, setColourKey1State] = useState("White")
  const [setColourKey2, setColourKey2State] = useState("White")
  const [setColourKey3, setColourKey3State] = useState("White")
  const [setColourKey4, setColourKey4State] = useState("White")
  const [setColourKey5, setColourKey5State] = useState("White")
  const [setColourKey6, setColourKey6State] = useState("White")
  const [setColourKey7, setColourKey7State] = useState("White")
  const [setColourKey8, setColourKey8State] = useState("White")
  const [setColourKey9, setColourKey9State] = useState("White")
  const [setColourKey10, setColourKey10State] = useState("White")
  const [setColourKey11, setColourKey11State] = useState("White")
  const [setColourKey12, setColourKey12State] = useState("White")
  const [setColourKey13, setColourKey13State] = useState("White")
  const [setColourKey14, setColourKey14State] = useState("White")

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

    if(!props.userData.analysis.recommendationTrend.trend[0].period === "undefined"){
      setAnalysisState( {
        data: "recived",
        rec0mperiod: JSON.stringify(props.userData.analysis.recommendationTrend.trend[0].period),
        rec0mstrongbuy: props.userData.analysis.recommendationTrend.trend[0].strongBuy,
        rec0mbuy: props.userData.analysis.recommendationTrend.trend[0].buy,
        rec0mhold: props.userData.analysis.recommendationTrend.trend[0].hold,
        rec0msell: props.userData.analysis.recommendationTrend.trend[0].sell,
        rec0mstrongsell: props.userData.analysis.recommendationTrend.trend[0].sell,
        rec1mperiod: JSON.stringify(props.userData.analysis.recommendationTrend.trend[1].period),
        rec1mstrongbuy: props.userData.analysis.recommendationTrend.trend[1].strongBuy,
        rec1mbuy: props.userData.analysis.recommendationTrend.trend[1].buy,
        rec1mhold: props.userData.analysis.recommendationTrend.trend[1].hold,
        rec1msell: props.userData.analysis.recommendationTrend.trend[1].sell,
        rec1mstrongsell: props.userData.analysis.recommendationTrend.trend[1].sell,
        rec2mperiod: JSON.stringify(props.userData.analysis.recommendationTrend.trend[2].period),
        rec2mstrongbuy: props.userData.analysis.recommendationTrend.trend[2].strongBuy,
        rec2mbuy: props.userData.analysis.recommendationTrend.trend[2].buy,
        rec2mhold: props.userData.analysis.recommendationTrend.trend[2].hold,
        rec2msell: props.userData.analysis.recommendationTrend.trend[2].sell,
        rec2mstrongsell: props.userData.analysis.recommendationTrend.trend[2].sell,
        rec3mperiod: JSON.stringify(props.userData.analysis.recommendationTrend.trend[3].period),
        rec3mstrongbuy: props.userData.analysis.recommendationTrend.trend[3].strongBuy,
        rec3mbuy: props.userData.analysis.recommendationTrend.trend[3].buy,
        rec3mhold: props.userData.analysis.recommendationTrend.trend[3].hold,
        rec3msell: props.userData.analysis.recommendationTrend.trend[3].sell,
        rec3mstrongsell: props.userData.analysis.recommendationTrend.trend[3].sell,
        debtToEquity: props.userData.analysis.financialData.debtToEquity
      })
    }

    if(props.userData.revenueQuarterlyGrowth > 0.25){setColourKey1State("Green");}
    else{
      if(props.userData.revenueQuarterlyGrowth > 0.1){setColourKey1State("Orange");}
      else{setColourKey1State("Red");}
    }

    if(props.userData.earningsQuarterlyGrowth > 0.25){setColourKey2State("Green");}
    else{
      if(props.userData.earningsQuarterlyGrowth > 0.1){setColourKey2State("Orange");}
      else{setColourKey2State("Red");}
    }
    
    if(props.userData.trailingPE < 20){setColourKey3State("Green");}
    else{
      if(props.userData.trailingPE < 40){setColourKey3State("Orange");}
      else{setColourKey3State("Red");}
    }

    if(props.userData.fiftytwoWeekChange > 0.25){setColourKey5State("Green");}
    else{
      if(props.userData.fiftytwoWeekChange > 0.1){setColourKey5State("Orange");}
      else{setColourKey5State("Red");}
    }
    
    if(props.userData.pegRatio < 1){setColourKey6State("Green");}
    else{
      if(props.userData.pegRatio <= 1.5){setColourKey6State("Orange");}
      if(props.userData.pegRatio > 1.5){setColourKey6State("Red");}
      
    }
    if(props.userData.pegRatio < 0){setColourKey6State("Red");}
    if(props.userData.pegRatio === 0){setColourKey6State("White");} //////// Change this later, do this calc manually if the val is 0
    
    
    if(setAnalysis.debtToEquity/100 < 1){setColourKey9State("Green");}
    else{
      if(setAnalysis.debtToEquity/100 <= 2.0){setColourKey9State("Orange");}
      if(setAnalysis.debtToEquity/100 > 2.0){setColourKey9State("Red");}
      
    }
    if(setAnalysis.debtToEquity/100 < 0){setColourKey9State("Red");}
    if(setAnalysis.debtToEquity/100 === 0){setColourKey9State("White");} //////// Change this later, do this calc manually if the val is 0
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.userData.symbol}: {props.userData.longName}</p>
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
              <div style={{color: `${setColourKey1}`}}><h4>   Quarterly Revenue Growth (YoY): {parseFloat(props.userData.revenueQuarterlyGrowth*100).toPrecision(4)}% </h4></div>
              <div style={{color: `${setColourKey2}`}}><h4>   Quarterly Earnings Growth (YoY): {parseFloat(props.userData.earningsQuarterlyGrowth*100).toPrecision(4)}% </h4></div>
              <div style={{color: `${setColourKey3}`}}><h4>   Price to Earnings (TTM): {parseFloat(props.userData.trailingPE).toPrecision(4)} </h4></div>
              <div style={{color: `${setColourKey4}`}}><h4>   Returns Over Five Years: {props.userData.fiveYearAverageReturn} </h4></div>
              <div style={{color: `${setColourKey5}`}}><h4>   (Growth) Predicted Growth in 5 Years :: {parseFloat(props.userData.fiftytwoWeekChange*100).toPrecision(4)}% </h4></div>
              <div style={{color: `${setColourKey6}`}}><h4>   (Growth) Price / Earnings to Growth (P/E/G): {props.userData.pegRatio} Ratio </h4></div>
              <div style={{color: `${setColourKey7}`}}><h4> Dividend Consistency </h4></div>
              <div style={{color: `${setColourKey8}`}}><h4> Chart of Last 5yrs Earnings </h4></div>
              <div style={{color: `${setColourKey9}`}}><h4> Debt to Equity Ratio {parseFloat(setAnalysis.debtToEquity/100).toPrecision(4)} </h4></div>
              <div style={{color: `${setColourKey10}`}}><h4> Margin/Profit over the last 5 Years? </h4></div>
              <div style={{color: `${setColourKey11}`}}><h4> Return on Equity, Assets and Capital? </h4></div>
              <div style={{color: `${setColourKey12}`}}><h4> Earnings Per Share (Last 5 Years): <br/> {} <br/> {} <br/> {} <br/> {} </h4></div>
                            
              <div style={{color: `${setColourKey13}`}}><h4><br/> Approximated growth rate ::::::::::: </h4></div>
              
              <div style={{color: `${setColourKey14}`}}><h4><br/> Calculated Stoploss on current stock price </h4></div>
              <div style={{color: "white"}}><h4><br/> Recommendation Trends: </h4></div>
              <div style={{color: "white"}}><h4> Period: {setAnalysis.rec0mperiod} Strong Buy: {setAnalysis.rec0mstrongbuy} Buy: {setAnalysis.rec0mbuy} Hold: {setAnalysis.rec0mhold} Sell: {setAnalysis.rec0msell} StrongSell: {setAnalysis.rec0mstrongsell}</h4></div>
              <div style={{color: "white"}}><h4> Period: {setAnalysis.rec1mperiod} Strong Buy: {setAnalysis.rec1mstrongbuy} Buy: {setAnalysis.rec1mbuy} Hold: {setAnalysis.rec1mhold} Sell: {setAnalysis.rec1msell} StrongSell: {setAnalysis.rec1mstrongsell}</h4></div>
              <div style={{color: "white"}}><h4> Period: {setAnalysis.rec2mperiod} Strong Buy: {setAnalysis.rec2mstrongbuy} Buy: {setAnalysis.rec2mbuy} Hold: {setAnalysis.rec2mhold} Sell: {setAnalysis.rec2msell} StrongSell: {setAnalysis.rec2mstrongsell}</h4></div>
              <div style={{color: "white"}}><h4> Period: {setAnalysis.rec3mperiod} Strong Buy: {setAnalysis.rec3mstrongbuy} Buy: {setAnalysis.rec3mbuy} Hold: {setAnalysis.rec3mhold} Sell: {setAnalysis.rec3msell} StrongSell: {setAnalysis.rec3mstrongsell}</h4></div>
              
            </td>
          </tr>
        </table>
        <div><p><b>{props.userData.longBusinessSummary}</b></p></div>
      </div>
    </div>
  );
}
export default Accordion;