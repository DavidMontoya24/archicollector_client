# Archicollector Client
This is the client front end for the ArchiCollector App, challenge of Codeable to Vinco
by David Montoya

This project was developed with ReactJs as framework and uses the following libraries: emotion for styled components, react-icons and framer-motion.

## Usage

This repo is using by default a Fly.io deployed API version as BASE_URI
Note: I made a Heroku hosting deployed version of the Api as well

1. DOWNLOAD or CONE this repo
2. OPEN THIS REPO and in your terminal run `npm install`
3. Then run `npm start` which takes 3000 port by default to run the app and wait until the browser is open

4. If you want to run it locally
  - Download ArchiCollector API repo: https://github.com/DavidMontoya24/archicollector_api
  - On that that api repo open your terminal and run `npm install`
  - On that that api repo run `npm start` to start the server on 8000 port
  - On this repo go to src/config.js file and use that BASE_URI
  - Follow the steps 2 and 3