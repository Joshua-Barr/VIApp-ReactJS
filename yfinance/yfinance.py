#!/usr/bin/env python
# -*- coding: UTF-8 -*-
#
# Yahoo! Finance market data downloader (+fix for Pandas Datareader)
# https://github.com/ranaroussi/yfinance

"""
Sanity check for most common library uses all working

- Stock: Microsoft
- ETF: Russell 2000 Growth
- Mutual fund: Vanguard 500 Index fund
- Index: S&P500
- Currency BTC-USD
"""
import sys
import os

import yfinance as yf
tracker = sys.argv[1]
stockdata = yf.Ticker(tracker)

# get stock info
print(stockdata.info)

# get historical market data
#print(stockdata.history(period="max"))

# show actions (dividends, splits)
#print(stockdata.actions)

# My hacky way of getting the analysis page
print('\"analysis\": ' + str(yf.utils.get_json('https://au.finance.yahoo.com/quote/'+ tracker +'/analysis', None , None)) + '}')

# show splits
#print("Splits::::::::::::::::::::::::")
#print(stockdata.splits)]

# show financials
#print("Financials::::::::::::::::::::::::")
#print(stockdata.financials)

# show major holders
#print("Holders::::::::::::::::::::::::")
#print(stockdata.major_holders)
#print(stockdata.institutional_holders)

# show balance sheet
#print("Balance Sheet:::::::::::::::::::::::::::")
#print(stockdata.balance_sheet)

# show cashflow
#print("Cash Flow:::::::::::::::::::::::::::")
#print(stockdata.cashflow)

# show earnings
#print("Earnings:::::::::::::::::::::::::::")
#print(stockdata.earnings)

# show sustainability
#print("Sustainability:::::::::::::::::::::::::::")
#print(stockdata.sustainability)

# show analysts recommendations
#print("Recommendations:::::::::::::::::::::::::::")
#print(stockdata.recommendations)

# show next event (earnings, etc)
#print(stockdata.calendar)

# ISIN = International Securities Identification Number
#print(stockdata.isin)