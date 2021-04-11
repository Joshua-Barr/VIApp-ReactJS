import "./styles.css";

import Sharesdisplay from "./components/Sharesdisplay";
import AccordionApp from "./components/AccordionApp";
import Header from "./components/Header"


export default function App() {

  

  return (
    <div className="App">
      <h1> List of Shares </h1>
      <Sharesdisplay />
      <AccordionApp />
      <Header />
    </div>
  );
}
