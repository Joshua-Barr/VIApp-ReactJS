import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home"
import ASX100 from "./pages/ASX100"
import SNP100 from "./pages/SNP100"
import SNP500 from "./pages/SNP500"
import Nasdaq100 from "./pages/Nasdaq-100"
import FTSE100 from "./pages/FTSE100"
import FTSE250 from "./pages/FTSE250"
import NIKKEI225 from "./pages/Nikkei225"
import Search from "./pages/Search"
import BurgerMenu from "./pages/Menu";

import "./styles.css";

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
              <Route path="/snp500" component={SNP500} />
              <Route path="/nasdaq100" component={Nasdaq100} />
              <Route path="/ftse100" component={FTSE100} />
              <Route path="/ftse250" component={FTSE250} />
              <Route path="/nikkei225" component={NIKKEI225} />
              <Route path="/search" component={Search} />
            </Switch>
        </div>
      </div>
    );
}