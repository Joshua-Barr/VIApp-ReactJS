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
print(stockdata.info)
print(sys.argv[1])