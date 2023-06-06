# Stock Evaluation Web App

## Value Investing App
The Value Investing App is a React.js application that allows users to calculate the fair value of a business using fundamental data. The app utilizes data scraped from Yahoo Finance using a Python scraping tool, and the scraped data is loaded into a MongoDB instance.

This project was bootstrapped with Create React App and then Create express app was added for the backend API.
yfinance contains https://github.com/ranaroussi/yfinance library and is referenced by the NodeJS API

Contains a backend API running on localhost:9000
Client contains the frontend, runs on localhost:3000



## Features
Fair Value Calculation: The app provides a mechanism to calculate the fair value of a business based on fundamental data.
Data Scraping: The Python scraping tool extracts relevant data from Yahoo Finance to provide up-to-date information for valuation purposes.
MongoDB Integration: The app utilizes MongoDB as a database to store and manage the scraped data.
User-Friendly Interface: The user interface is designed to be intuitive and user-friendly, allowing users to navigate through different pages and access relevant information easily.

## Installation
Clone the repository or download the source code.
Install the necessary dependencies by running the command: npm install.
Ensure that MongoDB is installed and running.
Build the app using the command: npm run build.
Deploy the built files to a web server or open the index.html file in a web browser.

## Usage
Open the app in a web browser.
Navigate through the different pages using the navigation menu or by directly accessing the desired route.
Utilize the fair value calculation feature by inputting relevant fundamental data for a business.
Explore the app to access additional features and information related to various stock indices such as ASX100, SNP100, SNP500, Nasdaq-100, FTSE100, FTSE250, and NIKKEI225.

## Technologies Used
React.js: JavaScript framework for building user interfaces.
React Router: Library for managing routing within a React application.
react-share: Library for integrating social media sharing icons.
MongoDB: NoSQL database used for storing and managing scraped data.

## Credits
Joshua Barr: Developed the Value Investing App and implemented the fair value calculation feature, data scraping tool, and MongoDB integration.

## License
This project is licensed under the MIT License.

## FEATURES TO ADD:

    - OAuth Login
    - DB API calls for Quick Lookups and Historic
    - Key Indicator Calculations (Pass from Express API?)
    - Rank and Sort the Accordian items by Selected Indicator
    - Search tracker page which creates an accordian item by added tracker (single and multiple)
    - Fix up the Indicators in the accordion component
https://www.youtube.com/watch?v=ICiwzpQDGCI&list=WL&index=33

## Notes
Run npm install or ci under the client and api folders
Install yfinance from python3 pip
Setup a local MongoDB instance

sudo apt update
sudo apt install python3-pip
sudo apt install unzip
wget https://github.com/Shortlived/VIApp-ReactJS/archive/refs/heads/main.zip
unzip main.zip
sudo python3 -m pip install yfinance
sudo nano VIApp-ReactJS/client/src/components/Sharesdisplay.jsx
sudo nano VIApp-ReactJS/client/src/components/SharesSort.jsx
sudo nano VIApp-ReactJS/api/routes/Schedule.jsx

cd client
npm install

cd api
npm install

crontab -e
