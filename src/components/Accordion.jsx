import React, { useState, useRef } from "react";
import Chart from "./Chart"

import Chevron from "./Chevron";

import "../styles.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
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
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <table>
          <tr>
            <td><div>Industry: {props.industry} <br></br> Sector: {props.sector}</div></td>
            <td><Chart/></td>
          </tr>
        </table>
        <div>{props.description}</div>
      </div>
    </div>
  );
}

export default Accordion;