import React, { useState, useRef, useEffect } from "react";

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

  const content = useRef(null);
  const table = "table";
  const info = "info";
  const logo_text = "company logo";
  const link = "link";

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );

    if(props.revenueQuarterlyGrowth > 0.25){setColourKey1State("Green");}
    else{
      if(props.revenueQuarterlyGrowth > 0.1){setColourKey1State("Orange");}
      else{setColourKey1State("Red");}
    }

    if(props.earningsQuarterlyGrowth > 0.25){setColourKey2State("Green");}
    else{
      if(props.earningsQuarterlyGrowth > 0.1){setColourKey2State("Orange");}
      else{setColourKey2State("Red");}
    }
    
    if(props.trailingPE < 20){setColourKey3State("Green");}
    else{
      if(props.trailingPE < 40){setColourKey3State("Orange");}
      else{setColourKey3State("Red");}
    }

    if(props.fiftytwoWeekChange > 0.25){setColourKey5State("Green");}
    else{
      if(props.fiftytwoWeekChange > 0.1){setColourKey5State("Orange");}
      else{setColourKey5State("Red");}
    }
    
    if(props.pegRatio < 1){setColourKey6State("Green");}
    else{
      if(props.pegRatio <= 1.5){setColourKey6State("Orange");}
      if(props.pegRatio > 1.5){setColourKey6State("Red");}
      
    }
    if(props.pegRatio < 0){setColourKey6State("Red");}
    if(props.pegRatio === 0){setColourKey6State("White");} //////// Change this later, do this calc manually if the val is 0
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.tracker}: {props.name}</p>
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
            <td><div class={info}><img src={props.logo_url} alt={logo_text}/>
              <br/>Industry: {props.industry} 
              <br/> Sector: {props.sector}
              <br/> Country: {props.country}
              <br/> Address: {props.address}
              <br/> State: {props.state}
              <br/> Phone: {props.phone}
              <br/> Website: <a class={link} href={props.website}>{props.website}</a>
              <br/> Sector: {props.sector}
            </div></td>

            <td><div><h3>KEY INDICATORS: </h3></div>
              <div style={{color: `${setColourKey1}`}}><h4>   (Long-term Revenue Growth) Quarterly Revenue Growth (YoY): {props.revenueQuarterlyGrowth*100}% </h4></div>
              <div style={{color: `${setColourKey2}`}}><h4>   (Long-term Revenue Growth) Quarterly Earnings Growth (YoY): {props.earningsQuarterlyGrowth*100}% </h4></div>
              <div style={{color: `${setColourKey3}`}}><h4>   Price to Earnings (ttm): {props.trailingPE} </h4></div>
              <div style={{color: `${setColourKey4}`}}><h4>   Returns Over Five Years: {props.fiveYearAverageReturn} </h4></div>
              <div style={{color: `${setColourKey5}`}}><h4>   (Growth) 52-Week Stock Price Growth :: {props.fiftytwoWeekChange*100}% </h4></div>
              <div style={{color: `${setColourKey6}`}}><h4>   (Growth) Price / Earnings to Growth (P/E/G): {props.pegRatio} Ratio </h4></div>
              <div style={{color: `${setColourKey7}`}}><h4> 1 yr. % Change in EPS (Basic): 25% to 50% and 50% to 100% and gt 100% </h4></div>
              <div style={{color: `${setColourKey7}`}}><h4> Dividend Consistency </h4></div>
              <div style={{color: `${setColourKey7}`}}><h4> Chart of Last 5yrs Earnings </h4></div>
              <div style={{color: `${setColourKey7}`}}><h4> Equity to Debt Ratio </h4></div>
              <div style={{color: `${setColourKey7}`}}><h4> Margin/Profit over the last 5 Years? </h4></div>
              <div style={{color: `${setColourKey7}`}}><h4> Return on Equity, Assets and Capital? </h4></div>
                            
              <div style={{color: `${setColourKey7}`}}><h4> Approximated growth rate ::::::::::: </h4></div>
              
              <div style={{color: `${setColourKey7}`}}><h4> Calculated Stoploss on current stock price </h4></div>


            </td>
          </tr>
        </table>
        <div><p><b>{props.description}</b></p></div>
      </div>
    </div>
  );
}
export default Accordion;