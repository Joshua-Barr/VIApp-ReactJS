import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home"
import ASX100 from "./pages/ASX100"
import Nasdaq100 from "./pages/Nasdaq-100"
import SNP100 from "./pages/SNP100"
import BurgerMenu from "./pages/Menu";

import "./styles.css";

//ROUTER WILL SIT HERE OR WILL BE CALLED FROM HERE

export default function App() {

    return (
      <div>
        <header className="App-header">
          <div><h1>Value Investing Tool</h1></div>
        </header>
        <div className="App">
          <BurgerMenu />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/asx100" component={ASX100} />
              <Route path="/snp100" component={SNP100} />
              <Route path="/nasdaq100" component={Nasdaq100} />
            </Switch>
        </div>
      </div>
    );
}