import ASX100 from "./pages/ASX100";
import Burger from "./pages/Menu";

import "./styles.css";

export default function App() {

    return (
      <div>
        <header className="App-header">
          <div><h1>List of Shares</h1></div>
        </header>
        <div className="App">
          <Burger />
          <ASX100 />
        </div>
      </div>
    );
}