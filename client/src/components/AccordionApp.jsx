import React from "react";
import Accordion from "./Accordion";

import "../styles.css";

class AccordionApp extends React.Component {

  constructor (props) {
    super(props);
    this.setTitle = { 
      value: props.userData
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
      alert(this.setTitle.value)
      this.setTitle.setState({value:'Touch me'})
    }
  }

  render() {
    return (
      <div>
        <Accordion
          userData={this.props.userData}
        />
      </div>
    );
  }
}

export default AccordionApp;