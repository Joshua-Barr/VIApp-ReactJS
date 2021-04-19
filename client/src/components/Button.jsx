import React from 'react';
import '../styles.css';

class MyComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        value:"Touch me"
    };
  }
  buttonHandler=()=>{
    if (this.state.value=="Touch me"){
      this.setState({value:'<button> <button/>'})
    }
    else {
      this.setState({value:'Touch me'})
    }
  }
  render() {
    return(
      <div>
          <h1>My Component!</h1>
          <button onClick={this.buttonHandler} className="button">{this.state.value}</button>
        </div>
    );
  }
}
export default MyComponent;