import React from "react";
import Accordion from "./Accordion";

import "../styles.css";

class AccordionApp extends React.Component {

  constructor (props) {
    super(props);
    this.setTitle = { 
      value: this.props.title
    };
    this.setContent = { 
      value: this.props.currency
    };
    this.setContent = { 
      value: this.props.industry
    };
    this.setColour = {
      colour: "fffff"
    };
  }

  accordionHandler=()=>{
    if (this.setTitle.value==="Title of This Tab"){
      this.setTitle.value = ({value:'Test'})
    }
    else {
      this.setTitle.setState({value:'Touch me'})
    }
  }

  render() {
    return (
      <div>
        <Accordion

          zip={this.props.zip}
          sector={this.props.sector}
          description={this.props.description}
          city={this.props.city}

          tracker={this.props.tracker}
          name={this.props.name}
          content={this.props.currency}
          exchange={this.props.exchange}
          shortName={this.props.shortName}

          phone={this.props.phone}
          state={this.props.state}
          country={this.props.country}
          website={this.props.website}
          address={this.props.address1}
          industry={this.props.industry}
          logo_url={this.props.logo_url}

          previousClose={this.props.previousClose}
          regularMarketOpen={this.props.regularMarketOpen}
          twoHundredDayAverage={this.props.twoHundredDayAverage}
          trailingAnnualDividendYield={this.props.trailingAnnualDividendYield}
          payoutRatio={this.props.payoutRatio}
          volume24Hr={this.props.volume24Hr}
          regularMarketDayHigh={this.props.regularMarketDayHigh}
          navPrice={this.props.navPrice}
          averageDailyVolume10Day={this.props.averageDailyVolume10Day}
          totalAssets={this.props.totalAssets}
          regularMarketPreviousClose={this.props.regularMarketPreviousClose}
          fiftyDayAverage={this.props.fiftyDayAverage}
          trailingAnnualDividendRate={this.props.trailingAnnualDividendRate}
          open={this.props.open}
          toCurrency={this.props.toCurrency}
          averageVolume10days={this.props.averageVolume10days}
          expireDate={this.props.expireDate}
          yield={this.props.yield}
          algorithm={this.props.algorithm}
          dividendRate={this.props.dividendRate}
          exDividendDate={this.props.exDividendDate}
          beta={this.props.beta}
          circulatingSupply={this.props.circulatingSupply}
          startDate={this.props.startDate}
          regularMarketDayLow={this.props.regularMarketDayLow}
          priceHint={this.props.priceHint}
          trailingPE={this.props.trailingPE}
          regularMarketVolume={this.props.regularMarketVolume}
          lastMarket={this.props.lastMarket}
          maxSupply={this.props.maxSupply}
          openInterest={this.props.openInterest}
          marketCap={this.props.marketCap}
          volumeAllCurrencies={this.props.volumeAllCurrencies}
          strikePrice={this.props.strikePrice}
          averageVolume={this.props.averageVolume}
          priceToSalesTrailing12Months={this.props.priceToSalesTrailing12Months}
          dayLow={this.props.dayLow}
          ask={this.props.ask}
          ytdReturn={this.props.ytdReturn}
          askSize={this.props.askSize}
          volume={this.props.volume}
          fiftyTwoWeekHigh={this.props.fiftyTwoWeekHigh}
          forwardPE={this.props.forwardPE}
          fromCurrency={this.props.fromCurrency}
          fiveYearAvgDividendYield={this.props.fiveYearAvgDividendYield}
          fiftyTwoWeekLow={this.props.fiftyTwoWeekLow}
          bid={this.props.bid}
          tradeable={this.props.tradeable}
          dividendYield={this.props.dividendYield}
          bidSize={this.props.bidSize}
          dayHigh={this.props.dayHigh}
          exchangeTimezoneName={this.props.exchangeTimezoneName}
          exchangeTimezoneShortName={this.props.exchangeTimezoneShortName}
          quoteType={this.props.quoteType}
          market={this.props.market}
          enterpriseToRevenue={this.props.enterpriseToRevenue}
          beta3Year={this.props.beta3Year}
          profitMargins={this.props.profitMargins}
          enterpriseToEbitda={this.props.enterpriseToEbitda}
          morningStarRiskRating={this.props.morningStarRiskRating}
          forwardEps={this.props.forwardEps}
          revenueQuarterlyGrowth={this.props.revenueQuarterlyGrowth}
          sharesOutstanding={this.props.sharesOutstanding}
          fundInceptionDate={this.props.fundInceptionDate}
          annualReportExpenseRatio={this.props.annualReportExpenseRatio}
          bookValue={this.props.bookValue}
          sharesShort={this.props.sharesShort}
          sharesPercentSharesOut={this.props.sharesPercentSharesOut}
          fundFamily={this.props.fundFamily}
          lastFiscalYearEnd={this.props.lastFiscalYearEnd}
          heldPercentInstitutions={this.props.heldPercentInstitutions}
          netIncomeToCommon={this.props.netIncomeToCommon}
          trailingEps={this.props.trailingEps}
          lastDividendValue={this.props.lastDividendValue}
          SandP52WeekChange={this.props.SandP52WeekChange}
          priceToBook={this.props.priceToBook}
          heldPercentInsiders={this.props.heldPercentInsiders}
          nextFiscalYearEnd={this.props.nextFiscalYearEnd}
          mostRecentQuarter={this.props.mostRecentQuarter}
          shortRatio={this.props.shortRatio}
          sharesShortPreviousMonthDate={this.props.sharesShortPreviousMonthDate}
          floatShares={this.props.floatShares}
          enterpriseValue={this.props.enterpriseValue}
          threeYearAverageReturn={this.props.threeYearAverageReturn}
          lastSplitDate={this.props.lastSplitDate}
          lastSplitFactor={this.props.lastSplitFactor}
          legalType={this.props.legalType}
          lastDividendDate={this.props.lastDividendDate}
          morningStarOverallRating={this.props.morningStarOverallRating}
          earningsQuarterlyGrowth={this.props.earningsQuarterlyGrowth}
          dateShortInterest={this.props.dateShortInterest}
          pegRatio={this.props.pegRatio}
          lastCapGain={this.props.lastCapGain}
          shortPercentOfFloat={this.props.shortPercentOfFloat}
          sharesShortPriorMonth={this.props.sharesShortPriorMonth}
          impliedSharesOutstanding={this.props.impliedSharesOutstanding}
          fiveYearAverageReturn={this.props.fiveYearAverageReturn}
          regularMarketPrice={this.props.regularMarketPrice}
        />
      </div>
    );
  }
}

export default AccordionApp;