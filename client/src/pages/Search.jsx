import React from "react"

import Sharesdisplay from "../components/Sharesdisplay";

import "../styles.css"

export default function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [displayItem, setDisplayItem] = React.useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
    setDisplayItem("")
  };

  const runSearch = event => {
    setDisplayItem(<Sharesdisplay Symbol={searchTerm} />)
  }
  
  return (
    <div className="App">
      <div class={"searchtext"}>Search for any stock below using its "Yahoo" friendly tracker:</div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button class={"searchbutton"}type={"button"}  onClick={runSearch} />
      <ul>
        <li>{displayItem}</li>
      </ul>
    </div>
  );
}