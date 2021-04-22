import Sharesdisplay from "./pages/Sharesdisplay";

import "./styles.css";

export default function App() {

  const Symbols = ["WES","AAPL","NVDA","AMD","IBM"];
  
    return (
      <div>
        <header className="App-header">
          <div><h1>List of Shares</h1></div>
        </header>
        <div className="App">
          {Symbols.map((Symbol) => <Sharesdisplay Symbol={Symbol} />)}
        </div>
      </div>
    );
}