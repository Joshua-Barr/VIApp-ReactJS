import React, { useState, useRef, useEffect } from "react";

import Chevron from "./Chevron";

import "../styles.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  
  const [setColourKey1, setColourKey1State] = useState("Red")
  const [setColourKey2, setColourKey2State] = useState("Red")
  const [setColourKey3, setColourKey3State] = useState("Red")
  const [setColourKey4, setColourKey4State] = useState("Red")
  const [setColourKey5, setColourKey5State] = useState("Red")
  const [setColourKey6, setColourKey6State] = useState("Red")
  const [setColourKey7, setColourKey7State] = useState("Red")

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

    const trailingPEIndicator = props.trailingPE;
    if(trailingPEIndicator < 20){setColourKey2State("Green");}
    else{
      if(trailingPEIndicator < 40){setColourKey2State("Orange");}
      else{setColourKey2State("Red");}
    }
    
    if(props.earningsQuarterlyGrowth > 0.25){setColourKey3State("Green");}
    else{
      if(props.earningsQuarterlyGrowth > 0.1){setColourKey3State("Orange");}
      else{setColourKey3State("Red");}
    }

    if(props.fiftytwoWeekChange > 0.25){setColourKey5State("Green");}
    else{
      if(props.fiftytwoWeekChange > 0.1){setColourKey5State("Orange");}
      else{setColourKey5State("Red");}
    }
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

            <td><div><h2>KEY INDICATORS: </h2></div>
              <div style={{color: `${setColourKey1}`}}><h3>     Quarterly Revenue Growth (YoY): {props.revenueQuarterlyGrowth*100}% </h3></div>
              <div style={{color: `${setColourKey2}`}}><h3>     Price to Earnings (ttm): {props.trailingPE} </h3></div>
              <div style={{color: `${setColourKey3}`}}><h3>     Quarterly Earnings Growth (YoY): {props.earningsQuarterlyGrowth*100}% </h3></div>
              <div style={{color: `${setColourKey4}`}}><h3>  ::: five year{props.fiveYearAverageReturn} </h3></div>
              <div style={{color: `${setColourKey5}`}}><h3> 52-Week Stock Price Growth :: {props.fiftytwoWeekChange*100}% </h3></div>
              <div style={{color: `${setColourKey6}`}}><h3> Price / Earnings to Growth (P/E/G): lt 1 </h3></div>
              <div style={{color: `${setColourKey7}`}}><h3> 1 yr. % Change in EPS (Basic): 25% to 50% and 50% to 100% and gt 100% </h3></div>
            </td>
          </tr>
        </table>
        <div><p><b>{props.description}</b></p></div>
      </div>
    </div>
  );
}
export default Accordion;