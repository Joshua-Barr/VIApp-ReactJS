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

    }

    render() {
        if(!this.props.data.isLoaded){
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
                            <div class={this.page.info}><img src={this.props.data.userData.logo_url} alt={this.page.logo_text}/><br/>
                            <br/>Industry: {this.props.data.userData.industry} 
                            <br/> Sector: {this.props.data.userData.sector}
                            <br/> Country: {this.props.data.userData.country}
                            <br/> State: {this.props.data.userData.state}
                            <br/> Phone: {this.props.data.userData.phone}
                            <br/> Website: <a class={this.page.link} href={this.props.data.userData.website}>{this.props.data.userData.website}</a>
                            <br/> Sector: {this.props.data.userData.sector}
                            <h3 style={{color: "darkgrey"}}><br/>Price: {this.props.data.userData.regularMarketPrice} | Daily High: {this.props.data.userData.regularMarketDayHigh}</h3>
                            <h3 style={{color: "darkgrey"}}>Last Open: {this.props.data.userData.open} | Last Close: {this.props.data.userData.previousClose}</h3></div><br/>
                            <Graph periods={[this.props.data.userData.rec1mperiod,this.props.data.userData.rec2mperiod,this.props.data.userData.rec3mperiod]} 
                            dataSBuy={[this.props.data.userData.rec1mstrongbuy,this.props.data.userData.rec2mstrongbuy,this.props.data.userData.rec3mstrongbuy]} labelSBuy="StrongBuy" 
                            dataBuy={[this.props.data.userData.rec1mbuy,this.props.data.userData.rec2mbuy,this.props.data.userData.rec3mbuy]} labelBuy="Buy" 
                            dataHold={[this.props.data.userData.rec1mhold,this.props.data.userData.rec2mhold,this.props.data.userData.rec3mhold]} labelHold="Hold" 
                            dataSell={[this.props.data.userData.rec1msell,this.props.data.userData.rec2msell,this.props.data.userData.rec3msell]} labelSell="Sell" 
                            dataSSell={[this.props.data.userData.rec1mstrongsell,this.props.data.userData.rec2mstrongsell,this.props.data.userData.rec3mstrongsell]} 
                            labelSSell="Strong Sell"/>

                        </td>
                        <td>
                            <div><h3>KEY INDICATORS: (Meaning, Moat and Management) <br/></h3></div>
                            <div style={{color: `${this.setColourKey2}`}}><h3> (Value) Quarterly Earnings Growth (YoY): {parseFloat(this.props.data.userData.earningsQuarterlyGrowth*100).toPrecision(4)}% </h3></div>
                            <div style={{color: `${this.setColourKey5}`}}><h3> (Growth) Predicted Growth in 5 Years: {parseFloat(this.props.data.userData.growthRate*100).toPrecision(4)}% </h3></div>
                            <div style={{color: `${this.setColourKey6}`}}><h3> (Growth) Price / Earnings / Growth (P/E/G): {this.props.data.userData.pegRatio} </h3></div>
                            <div style={{color: `${this.setColourKey7}`}}><h3> (Management) Five Year Ave Dividend Yeild: {this.props.data.userData.fiveYearAvgDividendYield}% </h3></div>
                            <div style={{color: `${this.setColourKey9}`}}><h3> (Management) Debt to Equity Ratio: {parseFloat(this.props.data.userData.debtToEquity/100).toPrecision(4)} </h3></div>
                            <div style={{color: `${this.setColourKey10}`}}><h3> (Management) Return on Equity: {parseFloat(this.props.data.userData.returnOnEquity*100).toPrecision(4)}% </h3></div>
                            <div style={{color: `${this.setColourKey11}`}}><h3> (Management) Earnings Per Share <br/> Forward EPS: {this.props.data.userData.forwardEps} <br/> Trailing EPS: {this.props.data.userData.trailingEps} </h3></div>
                            <div style={{color: `${this.setColourKey3}`}}><h3> (Value) Price to Earnings <br/> Forward PE: {parseFloat(this.props.data.userData.forwardPE).toPrecision(4)} <br/> Trailing PE: {parseFloat(this.props.data.userData.trailingPE).toPrecision(4)} </h3></div>
                            <div style={{color: `${this.setColourKey8}`}}><h3> <br/>Last 5yrs Earnings: </h3></div>

                            <div style={{color: `${this.setColourKey12}`}}><h3><br/> Calculated Fair Pricing on 15% Growth (Forward Indicators) <br/> Fair Price: {parseFloat((((1+(this.props.data.userData.growthRate))** 5) * this.props.data.userData.forwardEps * this.props.data.userData.forwardPE)/2).toPrecision(4)} <br/> 30% Confidence: {parseFloat((((1+(this.props.data.userData.growthRate))** 5) * this.props.data.userData.forwardEps * this.props.data.userData.forwardPE)*0.7*0.5).toPrecision(4)}</h3></div>
                            <div style={{color: `${this.setColourKey13}`}}><h3><br/> Calculated Fair Pricing on 15% Growth (Historic Indicators) <br/> Fair Price: {parseFloat((((1+(this.props.data.userData.growthRate))** 5) * this.props.data.userData.trailingEps * this.props.data.userData.forwardPE)/2).toPrecision(4)} <br/> 30% Confidence: {parseFloat((((1+(this.props.data.userData.growthRate))** 5) * this.props.data.userData.trailingEps * this.props.data.userData.forwardPE)*0.7*0.5).toPrecision(4)}</h3></div>
                        
                            <div style={{color: `${this.setColourKey15}`}}><h3><br/> Stoploss (8%) on Current Price: </h3></div>
                            <div style={{color: "Grey"}}></div>
                        </td>
                    </tr>
                </tbody>
                </table>
                <div>
                    <p className="Summary">{this.props.data.userData.longBusinessSummary}</p>
                </div>
            </div>
        )};
    }
}
export default Display;