import "./styles.css";

import Sharesdisplay from "./components/Sharesdisplay";
import Footer from "./components/Footer";



export default function App() {

  const Symbols = ["WES","AAPL","NVDA","AMD","IBM"];
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>List of Shares</h1>
        </header>

        {Symbols.map((Symbol) => <Sharesdisplay Symbol={Symbol} />)}

      <Footer />
      </div>
    );
}