import React, { useState, useEffect } from "react";
import AccordionApp from "./AccordionApp";

import "../styles.css";

function Sharesdisplay(props) {
  const [userData, setUserData] = useState({});

  const stockUrl = "http://localhost:9000/api/" + props.Symbol;
  
  useEffect(() => {
    
    getStockFetch();
  }, []);

  const getStockFetch = async () => {
    
    const response = await fetch(stockUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
      <div className="App">
        <div className="user-container">
        <AccordionApp 
          zip={userData.zip}
          sector={userData.sector}
          description={userData.longBusinessSummary}
          city={userData.city}

          tracker={props.Symbol} 
          name={userData.longName} 
          currency={userData.currency} 
          exchange={userData.exchange}
          shortName={userData.shortName}

          phone={userData.phone}
          state={userData.state}
          country={userData.country}
          website={userData.website}
          address={userData.address1}
          industry={userData.industry}
          logo_url={userData.logo_url}

          previousClose={userData.previousClose}
          regularMarketOpen={userData.regularMarketOpen}
          twoHundredDayAverage={userData.twoHundredDayAverage}
          trailingAnnualDividendYield={userData.trailingAnnualDividendYield}
          payoutRatio={userData.payoutRatio}
          volume24Hr={userData.volume24Hr}
          regularMarketDayHigh={userData.regularMarketDayHigh}
          navPrice={userData.navPrice}
          averageDailyVolume10Day={userData.averageDailyVolume10Day}
          totalAssets={userData.totalAssets}
          regularMarketPreviousClose={userData.regularMarketPreviousClose}
          fiftyDayAverage={userData.fiftyDayAverage}
          trailingAnnualDividendRate={userData.trailingAnnualDividendRate}
          open={userData.open}
          toCurrency={userData.toCurrency}
          averageVolume10days={userData.averageVolume10days}
          expireDate={userData.expireDate}
          yield={userData.yield}
          algorithm={userData.algorithm}
          dividendRate={userData.dividendRate}
          exDividendDate={userData.exDividendDate}
          beta={userData.beta}
          circulatingSupply={userData.circulatingSupply}
          startDate={userData.startDate}
          regularMarketDayLow={userData.regularMarketDayLow}
          priceHint={userData.priceHint}
          trailingPE={userData.trailingPE}
          regularMarketVolume={userData.regularMarketVolume}
          lastMarket={userData.lastMarket}
          maxSupply={userData.maxSupply}
          openInterest={userData.openInterest}
          marketCap={userData.marketCap}
          volumeAllCurrencies={userData.volumeAllCurrencies}
          strikePrice={userData.strikePrice}
          averageVolume={userData.averageVolume}
          priceToSalesTrailing12Months={userData.priceToSalesTrailing12Months}
          dayLow={userData.dayLow}
          ask={userData.ask}
          ytdReturn={userData.ytdReturn}
          askSize={userData.askSize}
          volume={userData.volume}
          fiftyTwoWeekHigh={userData.fiftyTwoWeekHigh}
          forwardPE={userData.forwardPE}
          fromCurrency={userData.fromCurrency}
          fiveYearAvgDividendYield={userData.fiveYearAvgDividendYield}
          fiftyTwoWeekLow={userData.fiftyTwoWeekLow}
          bid={userData.bid}
          tradeable={userData.tradeable}
          dividendYield={userData.dividendYield}
          bidSize={userData.bidSize}
          dayHigh={userData.dayHigh}
          exchangeTimezoneName={userData.exchangeTimezoneName}
          exchangeTimezoneShortName={userData.exchangeTimezoneShortName}
          quoteType={userData.quoteType}
          market={userData.market}
          enterpriseToRevenue={userData.enterpriseToRevenue}
          beta3Year={userData.beta3Year}
          profitMargins={userData.profitMargins}
          enterpriseToEbitda={userData.enterpriseToEbitda}
          morningStarRiskRating={userData.morningStarRiskRating}
          forwardEps={userData.forwardEps}
          revenueQuarterlyGrowth={userData.revenueQuarterlyGrowth}
          sharesOutstanding={userData.sharesOutstanding}
          fundInceptionDate={userData.fundInceptionDate}
          annualReportExpenseRatio={userData.annualReportExpenseRatio}
          bookValue={userData.bookValue}
          sharesShort={userData.sharesShort}
          sharesPercentSharesOut={userData.sharesPercentSharesOut}
          fundFamily={userData.fundFamily}
          lastFiscalYearEnd={userData.lastFiscalYearEnd}
          heldPercentInstitutions={userData.heldPercentInstitutions}
          netIncomeToCommon={userData.netIncomeToCommon}
          trailingEps={userData.trailingEps}
          lastDividendValue={userData.lastDividendValue}
          fiftytwoWeekChange={userData.fiftytwoWeekChange}
          SandPfiftytwoWeekChange={userData.SandPfiftytwoWeekChange}
          priceToBook={userData.priceToBook}
          heldPercentInsiders={userData.heldPercentInsiders}
          nextFiscalYearEnd={userData.nextFiscalYearEnd}
          mostRecentQuarter={userData.mostRecentQuarter}
          shortRatio={userData.shortRatio}
          sharesShortPreviousMonthDate={userData.sharesShortPreviousMonthDate}
          floatShares={userData.floatShares}
          enterpriseValue={userData.enterpriseValue}
          threeYearAverageReturn={userData.threeYearAverageReturn}
          lastSplitDate={userData.lastSplitDate}
          lastSplitFactor={userData.lastSplitFactor}
          legalType={userData.legalType}
          lastDividendDate={userData.lastDividendDate}
          morningStarOverallRating={userData.morningStarOverallRating}
          earningsQuarterlyGrowth={userData.earningsQuarterlyGrowth}
          dateShortInterest={userData.dateShortInterest}
          pegRatio={userData.pegRatio}
          lastCapGain={userData.lastCapGain}
          shortPercentOfFloat={userData.shortPercentOfFloat}
          sharesShortPriorMonth={userData.sharesShortPriorMonth}
          impliedSharesOutstanding={userData.impliedSharesOutstanding}
          fiveYearAverageReturn={userData.fiveYearAverageReturn}
          regularMarketPrice={userData.regularMarketPrice}
          />

        </div>
      </div>
    
  );
}

export default Sharesdisplay;