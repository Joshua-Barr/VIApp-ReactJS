import React from "react";

import Graph from "./Chart"

import "../styles.css";

class Display extends React.Component {

  constructor(props){
    super(props);

    this.page = {
        table : "table",
        info : "info",
        logo_text : "company logo",
        link : "link",
    }

    this.setColourKey2 = "Grey"
    this.setColourKey3 = "Grey"
    this.setColourKey4 = "Grey"
    this.setColourKey5 = "Grey"
    this.setColourKey6 = "Grey"
    this.setColourKey7 = "Grey"
    this.setColourKey8 = "Grey"
    this.setColourKey9 = "Grey"
    this.setColourKey10 = "Grey"
    this.setColourKey11 = "Grey"
    this.setColourKey12 = "Grey"
    this.setColourKey13 = "Grey"
    this.setColourKey14 = "Grey"
    this.setColourKey15 = "Grey"

    this.isLoaded = true

    this.earningsQuarterlyGrowth = props.data.userData.earningsQuarterlyGrowth
    this.longBusinessSummary = props.data.userData.longBusinessSummary
    this.trailingPE = props.data.userData.trailingPE
    this.forwardPE = props.data.userData.forwardPE
    this.pegRatio = props.data.userData.pegRatio
    this.fiveYearAvgDividendYield = props.data.userData.fiveYearAvgDividendYield
    this.trailingEps = props.data.userData.trailingEps
    this.forwardEps = props.data.userData.forwardEps
    this.logo_url = props.data.userData.logo_url
    this.industry = props.data.userData.industry
    this.sector = props.data.userData.sector
    this.country = props.data.userData.country
    this.address = props.data.userData.address
    this.state = props.data.userData.state
    this.phone = props.data.userData.phone
    this.website = props.data.userData.website
    this.regularMarketPrice = props.data.userData.regularMarketPrice
    this.regularMarketDayHigh = props.data.userData.regularMarketDayHigh
    this.open = props.data.userData.open
    this.previousClose = props.data.userData.previousClose

    this.debtToEquity = props.data.userData.debtToEquity
    this.returnOnEquity = props.data.userData.returnOnEquity
    this.growthRate = props.data.userData.growthRate
    //Recommendations
    this.rec0mperiod = props.data.userData.rec0mperiod
    this.rec0mstrongbuy = props.data.userData.rec0mstrongbuy
    this.rec0mbuy = props.data.userData.rec0mbuy
    this.rec0mhold = props.data.userData.rec0mhold
    this.rec0msell = props.data.userData.rec0msell
    this.rec0mstrongsell = props.data.userData.rec0mstrongbuy
    this.rec1mperiod = props.data.userData.rec1mperiod
    this.rec1mstrongbuy = props.data.userData.rec1mstrongbuy
    this.rec1mbuy = props.data.userData.rec1mbuy
    this.rec1mhold = props.data.userData.rec1mhold
    this.rec1msell = props.data.userData.rec1msell
    this.rec1mstrongsell = props.data.userData.rec1mstrongsell
    this.rec2mperiod = props.data.userData.rec2mperiod
    this.rec2mstrongbuy = props.data.userData.rec2mstrongbuy
    this.rec2mbuy = props.data.userData.rec2mbuy
    this.rec2mhold = props.data.userData.rec2mhold
    this.rec2msell = props.data.userData.rec2msell
    this.rec2mstrongsell = props.data.userData.rec2mstrongsell
    this.rec3mperiod = props.data.userData.rec3mperiod
    this.rec3mstrongbuy = props.data.userData.rec3mstrongbuy
    this.rec3mbuy = props.data.userData.rec3mbuy
    this.rec3mhold = props.data.userData.rec3mhold
    this.rec3msell = props.data.userData.rec3msell
    this.rec3mstrongsell = props.data.userData.rec3mstrongsell
    }


  componentDidMount = () => {
    this.timer = setInterval(() => {
    },15000)
 };
 
  componentWillUnmount() {
     clearInterval(this.timer);
  }

  render() {
      if(this.isLoaded === true){
        return (
            <div className="spinner">
            <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
            </div>
        );
      }
      else{
        return (
            <div className="accordion__text">
            <table id={this.page.table}>
            <tbody>
                    <tr>
                        <td>
                            <div class={this.page.info}><img src={this.logo_url} alt={this.page.logo_text}/>
                            <br/>Industry: {this.industry} 
                            <br/> Sector: {this.sector}
                            <br/> Country: {this.country}
                            <br/> Address: {this.address}
                            <br/> State: {this.state}
                            <br/> Phone: {this.phone}
                            <br/> Website: <a class={this.page.link} href={this.website}>{this.website}</a>
                            <br/> Sector: {this.sector}
                            <h3 style={{color: "darkgrey"}}><br/>Price: {this.regularMarketPrice} | Daily High: {this.regularMarketDayHigh}</h3>
                            <h3 style={{color: "darkgrey"}}>Last Open: {this.open} | Last Close: {this.previousClose}</h3></div><br/>
                            <Graph periods={[this.rec0mperiod,this.rec1mperiod,this.rec2mperiod,this.rec3mperiod]} 
                            dataSBuy={[this.rec0mstrongbuy,this.rec1mstrongbuy,this.rec2mstrongbuy,this.rec3mstrongbuy]} labelSBuy="StrongBuy" 
                            dataBuy={[this.rec0mbuy,this.rec1mbuy,this.rec2mbuy,this.rec3mbuy]} labelBuy="Buy" 
                            dataHold={[this.rec0mhold,this.rec1mhold,this.rec2mhold,this.rec3mhold]} labelHold="Hold" 
                            dataSell={[this.rec0msell,this.rec1msell,this.rec2msell,this.rec3msell]} labelSell="Sell" 
                            dataSSell={[this.rec0mstrongsell,this.rec1mstrongsell,this.rec2mstrongsell,this.rec3mstrongsell]} 
                            labelSSell="Strong Sell"/>

                        </td>
                        <td>
                            <div><h3>KEY INDICATORS: (Meaning, Moat and Management) </h3></div>
                            <div style={{color: `${this.setColourKey2}`}}><h3> (Value) Quarterly Earnings Growth (YoY): {parseFloat(this.earningsQuarterlyGrowth*100).toPrecision(4)}% </h3></div>
                            <div style={{color: `${this.setColourKey5}`}}><h3> (Growth) Predicted Growth in 5 Years: {parseFloat(this.growthRate*100).toPrecision(4)}% </h3></div>
                            <div style={{color: `${this.setColourKey6}`}}><h3> (Growth) Price / Earnings / Growth (P/E/G): {this.pegRatio} </h3></div>
                            <div style={{color: `${this.setColourKey7}`}}><h3> (Management) Five Year Ave Dividend Yeild: {this.fiveYearAvgDividendYield}% </h3></div>
                            <div style={{color: `${this.setColourKey9}`}}><h3> (Management) Debt to Equity Ratio: {parseFloat(this.debtToEquity/100).toPrecision(4)} </h3></div>
                            <div style={{color: `${this.setColourKey10}`}}><h3> (Management) Return on Equity: {parseFloat(this.returnOnEquity*100).toPrecision(4)}% </h3></div>
                            <div style={{color: `${this.setColourKey11}`}}><h3> (Management) Earnings Per Share <br/> Forward EPS: {this.forwardEps} <br/> Trailing EPS: {this.trailingEps} </h3></div>
                            <div style={{color: `${this.setColourKey3}`}}><h3> (Value) Price to Earnings <br/> Forward PE: {parseFloat(this.forwardPE).toPrecision(4)} <br/> Trailing PE: {parseFloat(this.trailingPE).toPrecision(4)} </h3></div>
                            <div style={{color: `${this.setColourKey8}`}}><h3> <br/>Last 5yrs Earnings: </h3></div>

                            <div style={{color: `${this.setColourKey12}`}}><h3><br/> Calculated Fair Pricing on 15% Growth (Forward Indicators) <br/> Fair Price: {parseFloat((((1+(this.growthRate))** 5) * this.forwardEps * this.forwardPE)/2).toPrecision(4)} <br/> 30% Confidence: {parseFloat((((1+(this.growthRate))** 5) * this.forwardEps * this.forwardPE)*0.7*0.5).toPrecision(4)}</h3></div>
                            <div style={{color: `${this.setColourKey13}`}}><h3><br/> Calculated Fair Pricing on 15% Growth (Historic Indicators) <br/> Fair Price: {parseFloat((((1+(this.growthRate))** 5) * this.trailingEps * this.forwardPE)/2).toPrecision(4)} <br/> 30% Confidence: {parseFloat((((1+(this.growthRate))** 5) * this.trailingEps * this.forwardPE)*0.7*0.5).toPrecision(4)}</h3></div>
                        
                            <div style={{color: `${this.setColourKey15}`}}><h3><br/> Stoploss (8%) on Current Price: </h3></div>
                            <div style={{color: "Grey"}}></div>
                        </td>
                    </tr>
                </tbody>
                </table>
                <div>
                <p><b>{this.longBusinessSummary}</b></p>
                </div>
            </div>
        )};
    }
}
export default Display;