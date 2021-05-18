# Stock Evaluation Web App

This project was bootstrapped with Create React App and then Create express app was added for the backend API.
yfinance contains https://github.com/ranaroussi/yfinance library and is referenced by the NodeJS API

Contains a backend API running on localhost:9000
Client contains the frontend, runs on localhost:3000


FEATURES TO ADD:

    - OAuth Login
    - DB Backend for Quick Lookups and Historic
    - Key Indicator Calculations (Pass from Express API?)
    - Rank and Sort the Accordian items by Selected Indicator
    - Search tracker page which creates an accordian item by added tracker (single and multiple)
    - Fix up the Indicators in the accordion component

https://www.youtube.com/watch?v=ICiwzpQDGCI&list=WL&index=33

Run npm install or ci under the client and api folders
Install yfinance from python3 pip
Setup a local MongoDB instance

sudo apt update
sudo apt install python3-pip
sudo apt install unzip
wget https://github.com/Shortlived/VIApp-ReactJS/archive/refs/heads/main.zip
unzip main.zip
sudo python3 pip install yfinance
nano VIApp-ReactJS/client/src/components/Sharesdisplay.jsx
nano VIApp-ReactJS/client/src/components/SharesSort.jsx
nano VIApp-ReactJS/api/routes/Schedule.jsx

cd client
npm install

cd api
npm install

crontab -e
