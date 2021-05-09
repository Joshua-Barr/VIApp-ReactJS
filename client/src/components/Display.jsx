import React, { useState, useRef, Component } from "react";
import Graph from "./Chart"

import "../styles.css";

class Display extends React.Component {

  constructor(props){
    super(props);

    this.props = props

    this.page = {
        table : "table",
        info : "info",
        logo_text : "company logo",
        link : "link",
    }

    this.earningsQuarterlyGrowth = props.data.userData.earningsQuarterlyGrowth
    this.longBusinessSummary = props.data.userData.longBusinessSummary
    this.trailingPE = props.data.userData.trailingPE
    this.forwardPE = props.data.userData.fowardPE
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

    this.debtToEquity = ""
    this.returnOnEquity = ""
    this.growthRate = ""
    //Recommendations
    this.rec0mperiod = ""
    this.rec0mstrongbuy = ""
    this.rec0mbuy = ""
    this.rec0mhold = ""
    this.rec0msell = ""
    this.rec0mstrongsell = ""
    this.rec1mperiod = ""
    this.rec1mstrongbuy = ""
    this.rec1mbuy = ""
    this.rec1mhold = ""
    this.rec1msell = ""
    this.rec1mstrongsell = ""
    this.rec2mperiod = ""
    this.rec2mstrongbuy = ""
    this.rec2mbuy = ""
    this.rec2mhold = ""
    this.rec2msell = ""
    this.rec2mstrongsell = ""
    this.rec3mperiod = ""
    this.rec3mstrongbuy = ""
    this.rec3mbuy = ""
    this.rec3mhold = ""
    this.rec3msell = ""
    this.rec3mstrongsell = ""
    
    }


  componentDidMount = () => {

    this.timer = setInterval(() => {
        if(typeof this.props.data.userData.analysis !== "undefined"){
            if(typeof this.props.data.userData.analysis.recommendationTrend !== "undefined"){
                if(typeof this.props.data.userData.analysis.financialData !== "undefined"){
                    this.setState({debtToEquity: this.props.data.userData.analysis.financialData.debtToEquity })
                    this.setState({returnOnEquity: this.props.data.userData.analysis.financialData.returnOnEquity })
                    this.setState({growthRate: this.props.data.userData.analysis.earningsTrend.trend[4].growth })
                    
                    //Recommendations
                    this.setState({rec0mperiod: this.props.data.userData.analysis.recommendationTrend.trend[0].period })
                    this.setState({rec0mstrongbuy: this.props.data.userData.analysis.recommendationTrend.trend[0].strongBuy })
                    this.setState({rec0mbuy: this.props.data.userData.analysis.recommendationTrend.trend[0].buy })
                    this.setState({rec0mhold: this.props.data.userData.analysis.recommendationTrend.trend[0].hold })
                    this.setState({rec0msell: this.props.data.userData.analysis.recommendationTrend.trend[0].sell })
                    this.setState({rec0mstrongsell: this.props.data.userData.analysis.recommendationTrend.trend[0].sell })
                    this.setState({rec1mperiod: this.props.data.userData.analysis.recommendationTrend.trend[1].period })
                    this.setState({rec1mstrongbuy: this.props.data.userData.analysis.recommendationTrend.trend[1].strongBuy })
                    this.setState({rec1mbuy: this.props.data.userData.analysis.recommendationTrend.trend[1].buy })
                    this.setState({rec1mhold: this.props.data.userData.analysis.recommendationTrend.trend[1].hold })
                    this.setState({rec1msell: this.props.data.userData.analysis.recommendationTrend.trend[1].sell })
                    this.setState({rec1mstrongsell: this.props.data.userData.analysis.recommendationTrend.trend[1].sell })
                    this.setState({rec2mperiod: this.props.data.userData.analysis.recommendationTrend.trend[2].period })
                    this.setState({rec2mstrongbuy: this.props.data.userData.analysis.recommendationTrend.trend[2].strongBuy })
                    this.setState({rec2mbuy: this.props.data.userData.analysis.recommendationTrend.trend[2].buy })
                    this.setState({rec2mhold: this.props.data.userData.analysis.recommendationTrend.trend[2].hold })
                    this.setState({rec2msell: this.props.data.userData.analysis.recommendationTrend.trend[2].sell })
                    this.setState({rec2mstrongsell: this.props.data.userData.analysis.recommendationTrend.trend[2].sell })
                    this.setState({rec3mperiod: this.props.data.userData.analysis.recommendationTrend.trend[3].period })
                    this.setState({rec3mstrongbuy: this.props.data.userData.analysis.recommendationTrend.trend[3].strongBuy })
                    this.setState({rec3mbuy: this.props.data.userData.analysis.recommendationTrend.trend[3].buy })
                    this.setState({rec3mhold: this.props.data.userData.analysis.recommendationTrend.trend[3].hold })
                    this.setState({rec3msell: this.props.data.userData.analysis.recommendationTrend.trend[3].sell})
                    this.setState({rec3mstrongsell: this.props.data.userData.analysis.recommendationTrend.trend[3].sell});
                }
            }
        }
        
        if(this.earningsQuarterlyGrowth > 0.25){this.setColourKey2 = ({setColourKey2: "Lime"});}
        else{
        if(this.earningsQuarterlyGrowth > 0.1){this.setColourKey2 =({setColourKey2: "Orange"});}
        else{this.setColourKey2 = ({setColourKey2: "Brown"});}
        }
        
        if(this.trailingPE < 20){this.setColourKey3 = ({setColourKey3: "Lime"});}
        else{
        if(this.trailingPE < 40){this.setColourKey3 = ({setColourKey3: "Orange"});}
        else{this.setColourKey3 = ({setColourKey3: "Brown"});}
        }
    
        if(this.growthRate >= 0.20){this.setColourKey5 = ({setColourKey5: "Lime"});}
        else{
        if(this.growthRate > 0.1){this.setColourKey5 = ({setColourKey5: "Orange"});}
        else{this.setColourKey5 = ({setColourKey5: "Brown"});}
        }
        
        if(this.pegRatio < 1){this.setColourKey6 = ({setColourKey6:"Lime"});}
        else{
        if(this.pegRatio <= 1.5){this.setColourKey6 = ({setColourKey6:"Orange"});}
        if(this.pegRatio > 1.5){this.setColourKey6 = ({setColourKey6:"Brown"});}
        }
        if(this.pegRatio < 0){this.setColourKey6 = ({setColourKey6: "Brown"});}
        if(this.pegRatio === 0){this.setColourKey6 = ({setColourKey6: "Grey"});}
    
        if(this.fiveYearAvgDividendYield > 2){this.setColourKey7 = ({setColourKey7:"Lime"});}
        else{
        if(this.fiveYearAvgDividendYield >= 1){this.setColourKey7 = ({setColourKey7:"Orange"});}
        if(this.fiveYearAvgDividendYield < 1){this.setColourKey7 = ({setColourKey7:"Brown"});}
        }
        if(this.fiveYearAvgDividendYield === 0){this.setColourKey7 = ({setColourKey7:"Grey"});}
        
        if(this.debtToEquity/100 < 0.75){this.setColourKey9 = ({setColourKey9: "Lime"});}
        else{
        if(this.debtToEquity/100 <= 1.0){this.setColourKey9 = ({setColourKey9: "Orange"});}
        if(this.debtToEquity/100 > 1.0){this.setColourKey9 = ({setColourKey9: "Brown"});}
        }
        if(this.debtToEquity/100 < 0){this.setColourKey9 = ({setColourKey9: "Brown"});}
        if(this.debtToEquity/100 === 0){this.setColourKey9 = ({setColourKey9: "Grey"});}
        
        if(this.returnOnEquity >= 0.2){this.setColourKey10 = ({setColourKey10: "Lime"});}
        else{
        if(this.returnOnEquity >= 0.1){this.setColourKey10 = ({setColourKey10: "Orange"});}
        else{this.setColourKey10 = ({setColourKey10: "Brown"});}
        }
        if(this.returnOnEquity === 0){this.setColourKey10 = ({setColourKey10: "Grey"});}
    },10000)
 };
 
  componentWillUnmount() {
     clearInterval(this.timer);
  }

  render() {
    return (
    <div className="accordion__text">
      <table id={this.page.table}>
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
                    <h3 style={{color: "darkgrey"}}>Last Open: {this.open} | Last Close: {this.previousClose}</h3></div>
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
                    <div style={{color: "Grey"}}><h3><br/> Recommendation Trends, by Month: </h3></div>
                    <div style={{color: "Grey"}}><h3> Period {this.rec0mperiod} <br/> Strong Buy: {this.rec0mstrongbuy} Buy: {this.rec0mbuy} Hold: {this.rec0mhold} Sell: {this.rec0msell} StrongSell: {this.rec0mstrongsell}</h3></div>
                    <div style={{color: "Grey"}}><h3> Period {this.rec1mperiod} <br/> Strong Buy: {this.rec1mstrongbuy} Buy: {this.rec1mbuy} Hold: {this.rec1mhold} Sell: {this.rec1msell} StrongSell: {this.rec1mstrongsell}</h3></div>
                    <div style={{color: "Grey"}}><h3> Period {this.rec2mperiod} <br/> Strong Buy: {this.rec2mstrongbuy} Buy: {this.rec2mbuy} Hold: {this.rec2mhold} Sell: {this.rec2msell} StrongSell: {this.rec2mstrongsell}</h3></div>
                    <div style={{color: "Grey"}}><h3> Period {this.rec3mperiod} <br/> Strong Buy: {this.rec3mstrongbuy} Buy: {this.rec3mbuy} Hold: {this.rec3mhold} Sell: {this.rec3msell} StrongSell: {this.rec3mstrongsell}</h3></div>
                </td>
            </tr>
        </table>
        <div>
        <p><b>{this.longBusinessSummary}</b></p>
        </div>
      </div>
    );
  }
}
export default Display;