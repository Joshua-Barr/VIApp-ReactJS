import React, { useState, useRef } from "react";
import Accordion from "./Accordion";

import "../styles.css";

class AccordionApp extends React.Component {

  constructor (props) {
    super(props);
    
    this.setTitle = { 
      value: this.props.title
    };

    this.setContent = { 
      value: this.props.currency
    };

    this.setColour = {
      colour: "fffff"
    };
  }

  accordionHandler=()=>{
    if (this.setTitle.value==="Title of This Tab"){
      this.setTitle.value = ({value:'Test'})
    }
    else {
      this.setTitle.setState({value:'Touch me'})
    }
  }

  render() {
    return (
      <div>
        <Accordion
          title={this.props.title}
          content={this.props.currency}
        />
      </div>
    );
  }
}

export default AccordionApp;