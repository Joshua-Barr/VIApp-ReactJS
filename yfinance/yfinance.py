import sys
import os

import yfinance as yf
tracker = sys.argv[1]
stockdata = yf.Ticker(tracker)

# get stock info
print(stockdata.info)

# My hacky way of getting the analysis page
print('\"analysis\": ' + str(yf.utils.get_json('https://au.finance.yahoo.com/quote/'+ tracker +'/analysis', None , None)) + '}')
