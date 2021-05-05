import React from "react"

import Sharesdisplay from "../components/Sharesdisplay";
import ShareSort from "../components/SharesSort";

import "../styles.css"

export default function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [displayItem, setDisplayItem] = React.useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
    setDisplayItem("")
  };

  const runSearch = event => {
    var regex = new RegExp("^[a-zA-Z.]+$");
    if(!regex.test(event.target.value)){
      //setDisplayItem(searchTerm.split(",").map((Symbol) => <ShareSort Symbols={Symbol} />))
      setDisplayItem(<ShareSort Symbols={searchTerm} />)
    }
  }
  
  return (
    <div className="App">
      <div class={"searchtext"}>Search for any stock below using its "Yahoo" friendly tracker: </div>
      <div style={{color: "Grey"}}><h6>To Search Multiple Trackers Separate with Comma's (e.g. WES.AX,CBA.AX)</h6></div>
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