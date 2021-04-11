import "./styles.css";

import Sharesdisplay from "./components/Sharesdisplay";
import Button from "./components/Button"


export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Sharesdisplay />
      <Button />
    </div>
  );
}
